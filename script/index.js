var lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-120px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

window.addEventListener("load", function () {
  var bannerNode = document.querySelector('[alt="www.000webhost.com"]')
    .parentNode.parentNode;
  bannerNode.parentNode.removeChild(bannerNode);
});
