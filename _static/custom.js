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
// Above the breakpoint the sidebar is shown/hidden in place; below it the theme
// shows the sidebar as a modal, so we open that via the navbar icon.
document.addEventListener("DOMContentLoaded", function () {
    var breakpoints = { primary: 992, secondary: 1200 };
    document.querySelectorAll("button.sidebar-toggle.btn").forEach(function (btn) {
        var kind = btn.classList.contains("primary-toggle") ? "primary" : "secondary";
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (window.innerWidth >= breakpoints[kind]) {
                document.querySelector(".bd-sidebar-" + kind)
                    .classList.toggle(kind === "primary" ? "pst-sidebar-hidden" : "sidebar-hidden");
            } else {
                var nav = document.querySelector("button." + kind + "-toggle:not(.btn)");
                if (nav) nav.click();
            }
        }, true);
    });
});
