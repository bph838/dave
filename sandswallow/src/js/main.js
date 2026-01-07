// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
import { Popover, Collapse } from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import $ from "jquery";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const menu = e.currentTarget.dataset.menu;
    let el = document.getElementById(menu);
    scrollToElement(el);
  });
});

const navLinks = document.querySelectorAll(".navbar .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const navbarCollapseEl = document.querySelector(".navbar-collapse");

// Get Collapse instance (or create one)
const navbarCollapse = new Collapse(navbarCollapseEl, { toggle: false });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.hide(); // closes the menu
  });
});

function scrollToElement(el, offset = 90) {
  if (!el) {
    console.log("el is null");
    return;
  }
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const yearEl = document.getElementById("copyright-year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
