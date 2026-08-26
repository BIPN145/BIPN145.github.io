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
