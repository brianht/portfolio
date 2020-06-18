/*=======================*
 * Main script execution *
 *=======================*/


import { Page, PageManager } from "./page.js";


const pageManager = new PageManager([
    new Page(
        "#home",
        document.getElementById("home-page"),
        document.getElementById("transition")
    ),
    new Page(
        "#experience",
        document.getElementById("experience-page"),
        document.getElementById("transition")
    ),
    new Page(
        "#works",
        document.getElementById("works-page"),
        document.getElementById("transition")
    )
]);


Array.from(document.getElementsByClassName("experience button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#experience"))
);

Array.from(document.getElementsByClassName("works button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#works"))
);

Array.from(document.getElementsByClassName("home button")).forEach(
    button => button.addEventListener("click", () => pageManager.setPage("#home"))
);