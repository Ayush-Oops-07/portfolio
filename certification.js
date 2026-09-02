$(document).ready(function(){

  /* ==== NAVBAR TOGGLE ==== */
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if(window.scrollY > 60){
      document.querySelector('#scroll-top')?.classList.add('active');
    } else {
      document.querySelector('#scroll-top')?.classList.remove('active');
    }
  });

  /* ==== SCROLL REVEAL ==== */
  if (typeof ScrollReveal !== "undefined") {
    const srtop = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 800,
      reset: false
    });
    srtop.reveal(".cert-card", { interval: 120 });
  }

  /* ==== CERTIFICATE MODAL ==== */
  const certModal = document.getElementById("certModal");
  const certModalImg = document.getElementById("certModalImg");
  const certCaption = document.getElementById("certCaption");
  const certClose = certModal?.querySelector(".close");
  let lastFocused = null;

  if (!certModal || !certModalImg || !certCaption) {
    // if modal DOM isn't present, stop silently
    return;
  }

  // Ensure modal is hidden and image cleared on load (prevents restore/open on refresh)
  window.addEventListener("load", () => {
    certModal.style.display = "none";
    certModalImg.src = "";
    certModalImg.alt = "";
    certCaption.innerHTML = "";
    document.body.style.overflow = "";
    // remove any hash that points to modal (defensive)
    if (window.location.hash && window.location.hash.toLowerCase().includes("certmodal")) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  });

  // Utility: open only when valid src provided
  function openCertModal(src, title, desc, alt) {
    if (!src || src === "undefined") return; // guard: don't open without valid image src

    lastFocused = document.activeElement;
    certModalImg.src = src;
    certModalImg.alt = alt || title || "Certificate";
    certCaption.innerHTML = `<h3 style="margin:0 0 .25rem;">${(title||"")}</h3><p style="margin:0;color:#e8e8e8">${(desc||"")}</p>`;
    certModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    certClose?.focus();
  }

  function closeCertModal() {
    certModal.style.display = "none";
    certModalImg.src = "";
    certModalImg.alt = "";
    certCaption.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Attach click / keyboard listeners to both .cert-card and .cert-box
  const cards = document.querySelectorAll(".cert-card, .cert-box");
  cards.forEach(card => {
    // click only if user-initiated (prevents synthetic/auto triggers)
    card.addEventListener("click", function (e) {
      if (!e.isTrusted) return; // ignore programmatic events
      const src = card.dataset.full || card.querySelector("img")?.getAttribute("src");
      const title = card.dataset.title || card.querySelector("h3")?.innerText;
      const desc = card.dataset.desc || card.querySelector("p")?.innerText;
      const alt = card.querySelector("img")?.alt || title;
      openCertModal(src, title, desc, alt);
    });

    // keyboard activation (Enter / Space)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const src = card.dataset.full || card.querySelector("img")?.getAttribute("src");
        const title = card.dataset.title || card.querySelector("h3")?.innerText;
        const desc = card.dataset.desc || card.querySelector("p")?.innerText;
        const alt = card.querySelector("img")?.alt || title;
        openCertModal(src, title, desc, alt);
      }
    });
  });

  // close handlers
  certClose?.addEventListener("click", closeCertModal);
  certModal.addEventListener("click", function (e) {
    if (e.target === certModal) closeCertModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && certModal.style.display === "flex") {
      closeCertModal();
    }
  });

  // image load/error handlers (user friendly)
  certModalImg.addEventListener("error", function () {
    // if image fails to load, show friendly message in caption
    certCaption.innerHTML = `<h3>Image not available</h3><p>The certificate image couldn't be loaded. Try again or check the file path.</p>`;
  });
  certModalImg.addEventListener("load", function () {
    // optional: nothing special, but keeps caption as set
  });

})();

/* ==== TAWK.TO LIVE CHAT ==== */
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();

/* ==== DISABLE DEVELOPER TOOLS ==== */
document.onkeydown = function(e) {
  if(e.keyCode == 123) return false;
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

/* ==== TITLE CHANGE ON TAB SWITCH ==== */
document.addEventListener("visibilitychange", function(){
  if(document.visibilityState === "visible"){
      document.title = "Certifications | Portfolio Ayush Sharma";
      $("#favicon").attr("href","/assets/images/favicon.png");
  } else {
      document.title = "Come Back To Portfolio";
      $("#favicon").attr("href","/assets/images/favhand.png");
  }
});