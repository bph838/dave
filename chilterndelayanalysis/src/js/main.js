// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
//import { Popover, Collapse } from "bootstrap";
//import "bootstrap-icons/font/bootstrap-icons.css";

//import $ from "jquery";

import { setupMenuCommands } from "./menu/menu";
import { initCopyrightYear } from "./uiComponents/copyrightYear";

document.addEventListener("DOMContentLoaded", () => {
  setupMenuCommands();
  initCopyrightYear();
});
