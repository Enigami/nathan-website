/* ============================================================
   site.config.js - this website's facts, for the engine in
   libraries/harrisxrwebengine/.

   Every page loads it second, after the engine's release.js and
   before site.js. The engine reads these values and never writes
   them. A page without this file still reads, and the editor refuses
   to open and names the missing file.

     siteId          Permanent. Names this site's browser storage and
                     its repo folder.
     engineVersion   The engine release this site expects. site.js
                     compares it with release.js. An engine upgrade
                     changes this pin and replaces the engine folder
                     whole.
     siteName, brand, description, avatar, ogImage, ogImageAlt
                     What a generated month page and the feed say
                     about the site. brand is the fallback when the
                     page's wordmark cannot be read, because the
                     wordmark is editable copy. ogImage is a 1200 by
                     630 image at the site root.
     publicUrl       The site's canonical address, with a trailing
                     slash. GitHub Pages serves the site at its own
                     domain, so the address is the bare domain. CNAME
                     at the site root names the same domain. The head
                     of each page repeats this address by hand.
     pages           The pages the editor may read and write, as paths
                     from the site root. The sitemap lists them.
     sharedSlugs     The regions that read the same on every page. An
                     edit to one is staged for every page.
     blog            True when the site has blog.html and blog/.
   ============================================================ */
window.AMH = window.AMH || {};
AMH.config = {
  siteId: "nharris",
  engineVersion: "1.1.1",
  siteName: "Nathaniel E. Harris",
  brand: "NATHANIEL HARRIS",
  description: "Systems software engineer. Backend services, data pipelines, reverse engineering and legacy hardware.",
  avatar: "img/nathaniel-portrait.jpg",
  ogImage: "og-image.png",
  ogImageAlt: "Nathaniel E. Harris, systems software engineer.",
  publicUrl: "https://nathanieleliasharris.com/",
  pages: [
    { path: "index.html", label: "Home" },
    { path: "gallery.html", label: "Gallery" },
    { path: "blog.html", label: "Blog" },
    { path: "about.html", label: "About" }
  ],
  sharedSlugs: ["brand-title", "brand-sub", "nav-work", "nav-gallery", "nav-blog", "nav-about",
    "nav-contact", "about-eyebrow", "about-lede", "about-p1", "about-p2", "about-p3",
    "about-place", "about-link", "contact-eyebrow", "contact-h2", "contact-email",
    "contact-btn-email", "contact-btn-linkedin", "contact-btn-site", "endbar"],
  blog: true
};
