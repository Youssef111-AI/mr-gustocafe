<!-- 🛡️ سكربت حماية أساسي – ضيفه قبل </body> مباشرة -->
<script>
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

  // 🔒 تعطيل سحب الصور من الموقع
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
    img.addEventListener("dragstart", e => e.preventDefault());
  });

  // 🔒 إخفاء الرسائل في الكونسول (جزئيًا)
  setInterval(function () {
    const devtools = /./;
    devtools.toString = function () {
      console.clear();
      window.location.href = "about:blank";
    };
    console.log("%c", devtools);
  }, 3000);

  const gaId = atob("Ry1HTktKRVlNTTAz"); // G-GNKJEYMM03
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gaId);

</script>
