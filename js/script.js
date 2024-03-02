document.addEventListener("DOMContentLoaded", function() {
  const Whatsapp = document.getElementById("Whatsapp");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");
  const copyButton = document.getElementById("copyButton");

  if (window.innerWidth > 768) {
    Whatsapp.addEventListener("click", function() {
      popup.style.display = "block";
    });

    popup.addEventListener("click", function(event) {
      if (!popup.contains(event.target)) {
        popup.style.display = "none";
      }
    });

    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });

    copyButton.addEventListener("click", function(event) {
      event.stopPropagation();
      const dummyTextArea = document.createElement("textarea");
      dummyTextArea.value = "https://wa.me/message/5GEP5VZYMY2WD1"; 
      document.body.appendChild(dummyTextArea);
      dummyTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(dummyTextArea);

      copyButton.textContent = "Copied ✓";
      copyButton.classList.add("copied");
      setTimeout(function() {
        copyButton.textContent = "Copy Link";
        copyButton.classList.remove("copied");
      }, 2000); 
    });
  } else {
    
    Whatsapp.addEventListener("click", function() {
      window.location.href = "https://wa.me/message/5GEP5VZYMY2WD1";
    });
  }
});
