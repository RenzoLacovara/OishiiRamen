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

const darkMode = () => {
  const body = document.querySelector("body");
  const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const checkbox = document.querySelector("#mode");
  let theme = window.localStorage.getItem("theme");
  let preference;

  const findSystemPreference = () => {
    if (systemDarkMode.matches) {
      preference = "dark";
    } else {
      preference = "light";
    }
  };

  const setUserPreference = (e) => {
    console.log(e.target);

    if (e.target.checked == true) {
      preference = "dark";
      window.localStorage.setItem("theme", "dark");
    } else if (e.target.checked == false) {
      preference = "light";
      window.localStorage.setItem("theme", "light");
    }
    setTheme(preference);
  };

  const setTheme = (pref) => {
    if (pref === "dark") {
      checkbox.checked = true;
      body.classList.add("oscuro");
    } else {
      body.classList.remove("oscuro");
      checkbox.checked = false;
    }
  };

  const loadInitialState = () => {
    if (theme === "dark") {
      checkbox.checked = true;
      body.classList.add("oscuro");
    } else {
      body.classList.remove("oscuro");

      checkbox.checked = false;
    }
  };

  checkbox.addEventListener("click", setUserPreference);
  window.addEventListener("DOMContentLoaded", findSystemPreference);
  window.addEventListener("DOMContentLoaded", loadInitialState);
};

darkMode();
