import { Page, PageManager } from "./page.js";

console.log((new Date()).toTimeString());

const pageManager = new PageManager([
    new Page(
        "#home",
        document.getElementById("home-page")
    ),
    new Page(
        "#experience",
        document.getElementById("experience-page")
    ),
    new Page(
        "#works",
        document.getElementById("works-page")
    )
]);