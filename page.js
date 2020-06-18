/*==============================*
 * Manages the pages of the SPA *
 *==============================*/


class Page
{
    /**
     * Logical representation of a SPA page
     * @param {String} location Where the page is located with regard to the URL
     * @param {HTMLElement} page Actual element containing the "page" content
     * @param {HTMLElement} changeScreen Element that performs transition
     */
    constructor(location, page, changeScreen)
    {
        this.location = location;
        this.page = page;
        this.changeScreen = changeScreen;
    }

    /**
     * Set the hidden state of this page
     * @param {Boolean} state Hidden state to set
     */
    hide(state)
    {
        setTimeout(() => {
            if (state)
            {
                this.page.classList.add("hidden");
            }
            else
            {
                this.page.classList.remove("hidden");
                this.page.scrollTop = 0;
            }
        }, 120)
        if (!state) this.transition();
    }

    /**
     * Perform page transition
     */
    transition()
    {
        this.changeScreen.classList.remove("hidden");
        setTimeout(() => this.changeScreen.classList.add("hidden"), 120);
    }
}


class PageManager
{
    /**
     * Manages the SPA "pages" based on the URL,
     * as well as setting the URL based on the currently displayed page
     * @param {Pages[]} pages Array of pages to display; pages[0] is displayed by default
     */
    constructor(pages)
    {
        this.pages = pages;
        this.setPage(window.location.hash)
        window.addEventListener("hashchange", () => this.setPage(window.location.hash));
    }

    /**
     * Get a managed page by its location
     * @param {String} location Location of the Page
     * @returns {Page} Page of the given location, or null
     */
    getPage(location)
    {
        for (let page of this.pages)
        {
            if (page.location === location) return page;
        }
        return this.pages[0];
    }

    /**
     * Changes the current SPA "page" to the given location
     * @param {String} location Location of the Page
     */
    setPage(location)
    {
        if (this.currentPage)
        {
            if (this.currentPage.location === location) return;
            this.currentPage.hide(true);
        }

        this.currentPage = this.getPage(location);
        window.location.hash = this.currentPage.location;
        this.currentPage.hide(false);
    }
}


export { Page, PageManager };