// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // The main title displayed in browser tabs and search engine results
    title: "Claire Riley | Portfolio",

    // A short fallback summary of your site used for SEO and social share cards
    description: "Claire Riley's technical writing portfolio.",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://claireriley.github.io/",

    // Your name, utilized in copyright strings and author meta tags
    author: "Claire Riley",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "en",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" },
  ],
}

export type SideyConfigType = typeof sideyConfig
