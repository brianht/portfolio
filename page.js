/*==============================*
 * Manages the pages of the SPA *
 *==============================*/


class Page
{
    /**
     * Logical representation of a SPA page
     * @param {String} location Where the page is located with regard to the URL
     * @param {HTMLElement} page Actual element containing the "page" content
     */
    constructor(location, page)
    {
        this.location = location;
        this.page = page;
    }

    /**
     * Set the hidden state of this page
     * @param {Boolean} state Hidden state to set
     */
    hide(state)
    {
        if (state)
        {
            this.page.classList.add("hidden");
        }
        else
        {
            this.page.classList.remove("hidden");
        }
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
        this.currentPage = this.pages[0];
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
        return null;
    }

    /**
     * Changes the current SPA "page" to the given location
     * @param {String} location Location of the Page
     */
    setPage(location)
    {
        this.currentPage.hide(true);

        const page = this.getPage(location);
        if (page) this.currentPage = page;

        window.location.hash = this.currentPage.location;
        this.currentPage.hide(false);
    }
}


export { Page, PageManager };