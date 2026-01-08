// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
import { Popover, Collapse } from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import $ from "jquery";


const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbarCollapseEl = document.querySelector(".navbar-collapse");
const navbarCollapse = new Collapse(navbarCollapseEl, { toggle: false });

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const menu = link.dataset.menu;
    const el = document.getElementById(menu);
    if (!el) return;

    // Active state
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Close menu FIRST
    navbarCollapse.hide();

    // Wait for collapse animation to finish
    setTimeout(() => {
      scrollToElement(el);
    }, 300); // Bootstrap collapse animation duration
  });
});

function scrollToElement(element) {
  const header = document.querySelector(".navbar");
  const offset = header?.offsetHeight || 0;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: "smooth",
  });
}

// Footer year
const yearEl = document.getElementById("copyright-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
