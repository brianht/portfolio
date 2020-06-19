/*=======================*
 * Main script execution *
 *=======================*/


import { Page, PageManager } from "./page.js";


// Set up page manager

const pageManager = new PageManager([
    new Page(
        "#home",
        document.getElementById("home-page"),
        document.getElementById("transition")
    ),
    new Page(
        "#about",
        document.getElementById("about-page"),
        document.getElementById("transition")
    ),
    new Page(
        "#works",
        document.getElementById("works-page"),
        document.getElementById("transition")
    )
]);

Array.from(document.getElementsByClassName("home button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#home"))
);

Array.from(document.getElementsByClassName("about button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#about"))
);

Array.from(document.getElementsByClassName("works button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#works"))
);

// Set default link behavior to new tab

Array.from(document.getElementsByTagName("a")).forEach(
    link => {
        if (link.getAttribute("href")[0] !== "#") link.setAttribute("target", "_blank");
    }
)