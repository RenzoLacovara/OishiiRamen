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
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
