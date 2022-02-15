let lastScrollpos = window.pageYOffset;
let menuButtonCheck = document.querySelector(".menu-btn");
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (lastScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-75px";
  }
  lastScrollpos = currentScrollPos;
  menuButtonCheck.checked = false;
};
