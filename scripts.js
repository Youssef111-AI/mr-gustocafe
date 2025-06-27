// 🔒 تعطيل كليك يمين
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🔒 تعطيل اختصارات F12 و Ctrl+U و Ctrl+Shift+I
document.addEventListener("keydown", function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.key === "U") ||
    (e.ctrlKey && e.key === "S") ||
    (e.ctrlKey && e.key === "C")
  ) {
    e.preventDefault();
  }
});

// 🔒 تعطيل سحب الصور
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
  img.addEventListener("dragstart", e => e.preventDefault());
});

// 🔒 إخفاء الكونسول
setInterval(function () {
  const devtools = /./;
  devtools.toString = function () {
    console.clear();
  };
  console.log("%c", devtools);
}, 3000);
