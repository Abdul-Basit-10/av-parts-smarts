"use strict";
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// mobile_nav.addEventListener("click", function () {
//   if (nav_header.classList.contains("active")) {
//     nav_header.classList.remove("active");
//   } else {
//     nav_header.classList.add("active");
//   }
// });
