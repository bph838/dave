// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
//import { Popover, Collapse } from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

//import $ from "jquery";

import data from "../data/site.json";
import { setupMenuCommands } from "./menu/menu";
import { initCopyrightYear } from "./components/copyrightYear";
import { renderNavigation } from "./components/navbar";
import { renderSections } from "./components/page";

const elNav = document.getElementById("topNav");
if (elNav) {  
  console.log(data);
  renderNavigation(elNav,data);    
  setupMenuCommands();
}

document.addEventListener("DOMContentLoaded", () => {  
  renderSections(data);
  initCopyrightYear();
});
