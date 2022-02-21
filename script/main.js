/*=======================*
 * Main script execution *
 *=======================*/

import { Page, PageManager } from "./page.js";

// Set default link behavior to new tab

Array.from(document.getElementsByTagName("a")).forEach((link) => {
  const href = link.getAttribute("href");
  if (href && href[0] === "#") return;
  link.setAttribute("target", "_blank");
});

// Disable image dragging

Array.from(document.getElementsByTagName("img")).forEach((image) =>
  image.setAttribute("draggable", "false")
);

// Email obfuscation

const contacter = document.getElementById("contact");
contacter.addEventListener("click", (event) => {
  let contact = "";
  ["nairb", "stra-enacra@", "ten."].forEach((s) => {
    contact += s.split("").reverse().join("");
  });
  setTimeout(() => {
    contacter.innerHTML = contact;
    contacter.setAttribute("href", "mailto:" + contact);
  }, 0);
});

const resetContact = () => {
  contacter.innerHTML = "contact";
  contacter.removeAttribute("href");
};

// Set up page manager

const pageManager = new PageManager([
  new Page(
    "#/",
    document.getElementById("home-page"),
    document.getElementById("transition"),
    resetContact
  ),
  new Page(
    "#/about",
    document.getElementById("about-page"),
    document.getElementById("transition")
  ),
  new Page(
    "#/works",
    document.getElementById("works-page"),
    document.getElementById("transition")
  ),
]);

Array.from(document.getElementsByClassName("home button")).forEach((button) =>
  button.addEventListener("click", () => pageManager.setPage("#/"))
);

Array.from(document.getElementsByClassName("about button")).forEach((button) =>
  button.addEventListener("click", () => pageManager.setPage("#/about"))
);

Array.from(document.getElementsByClassName("works button")).forEach((button) =>
  button.addEventListener("click", () => pageManager.setPage("#/works"))
);
