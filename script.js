(function () {
    var KEY = "theme";
    var root = document.documentElement;
    try {
        var saved = localStorage.getItem(KEY);
        if (saved === "light" || saved === "dark") { root.setAttribute("data-theme", saved); }
    } catch (e) {}

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("theme-btn");
        if (!btn) { return; }

        function current() { return root.getAttribute("data-theme") || "dark"; }

        function refresh() {
            var dark = current() === "dark";
            btn.textContent = dark ? "\u2600" : "\u263E";
            var label = dark ? "Passer au thème clair" : "Passer au thème sombre";
            btn.setAttribute("aria-label", window.i18n ? window.i18n.t(label) : label);
            var meta = document.querySelector('meta[name="theme-color"]');
            if (meta) { meta.setAttribute("content", dark ? "#1f2660" : "#f4f5ff"); }
        }

        btn.addEventListener("click", function () {
            var next = current() === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            try { localStorage.setItem(KEY, next); } catch (e) {}
            refresh();
        });

        refresh();
        document.addEventListener("langchange", refresh);
    });
})();
/* Effets visuels : apparition au defilement et halo qui suit la souris */
(function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { return; }

    document.addEventListener("DOMContentLoaded", function () {
        var root = document.documentElement;

        if (window.matchMedia("(hover: hover)").matches) {
            var raf = null, x = 0, y = 0;
            window.addEventListener("pointermove", function (e) {
                x = e.clientX; y = e.clientY;
                if (raf) { return; }
                raf = requestAnimationFrame(function () {
                    root.style.setProperty("--mx", x + "px");
                    root.style.setProperty("--my", y + "px");
                    raf = null;
                });
            }, { passive: true });
        }

        if (!("IntersectionObserver" in window)) { return; }
        var items = document.querySelectorAll(".section h2, .section .text, .card, .chip, .more");
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) { return; }
                var el = entry.target;
                io.unobserve(el);
                el.classList.add("in");
                setTimeout(function () {
                    el.classList.remove("reveal", "in");
                    el.style.transitionDelay = "";
                }, 1100);
            });
        }, { threshold: 0.12 });

        items.forEach(function (el, i) {
            el.classList.add("reveal");
            el.style.transitionDelay = ((i % 4) * 90) + "ms";
            io.observe(el);
        });

        /* securite anti-blocage : si l'observateur n'a rien declenche apres 4 s, on affiche ce qui est a l'ecran */
        setTimeout(function () {
            document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
                if (el.getBoundingClientRect().top < window.innerHeight * 1.2) { el.classList.add('in'); }
            });
        }, 4000);
    });
})();