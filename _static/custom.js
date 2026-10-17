// Hide any sidebar TOC section captioned "Unlisted" from the left nav.
// Pages inside it (e.g. Information/Schedule_FA26.md) are still built and
// reachable at their normal URL -- they're just left out of the visible
// navigation. See _toc.yml.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("p.caption > .caption-text").forEach(function (span) {
        if (span.textContent.trim() === "Unlisted") {
            var caption = span.closest("p.caption");
            var list = caption && caption.nextElementSibling;
            if (caption) caption.style.display = "none";
            if (list) list.style.display = "none";
        }
    });
});

// Make the "Toggle primary/secondary sidebar" buttons in the article header work.
// The theme (sphinx-book-theme + pydata-sphinx-theme) only attaches click handlers
// to the first .primary-toggle / .secondary-toggle in the DOM, which is the
// (mobile-only) navbar icon, so the article-header buttons do nothing.
document.addEventListener("DOMContentLoaded", function () {
    var desktop = window.matchMedia("(min-width: 992px)");
    document.querySelectorAll("button.sidebar-toggle.btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var primary = btn.classList.contains("primary-toggle");
            if (primary && !desktop.matches) {
                // Narrow screens: open the theme's modal sidebar via its navbar icon.
                var nav = document.querySelector("button.pst-navbar-icon.primary-toggle");
                if (nav) nav.click();
            } else {
                var target = document.querySelector(
                    primary ? ".bd-sidebar-primary" : ".bd-sidebar-secondary");
                if (target) target.classList.toggle(primary ? "pst-sidebar-hidden" : "sidebar-hidden");
            }
            e.preventDefault();
            e.stopImmediatePropagation();
        }, true);
    });
});
