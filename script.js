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
            if (meta) { meta.setAttribute("content", dark ? "#2c3786" : "#f4f5ff"); }
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
/* Fenetre des competences : un clic sur un bloc ouvre ses competences, le fond s'assombrit */
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var dlg = document.getElementById("skill-dialog");
        if (!dlg || typeof dlg.showModal !== "function") { return; }

        var blocks = document.querySelectorAll(".skill-block");
        var num = document.getElementById("skill-dialog-num");
        var title = document.getElementById("skill-dialog-title");
        var pills = document.getElementById("skill-dialog-pills");

        function openFor(block) {
            num.textContent = block.querySelector(".num").textContent;
            title.textContent = block.querySelector("h3").textContent;
            pills.innerHTML = "";
            Array.prototype.forEach.call(block.querySelectorAll(".pills .pill"), function (p) {
                pills.appendChild(p.cloneNode(true));
            });
            dlg.showModal();
        }

        Array.prototype.forEach.call(blocks, function (block) {
            block.addEventListener("click", function () { openFor(block); });
            block.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openFor(block); }
            });
        });

        dlg.querySelector(".dlg-close").addEventListener("click", function () { dlg.close(); });

        /* clic en dehors de la fenetre = fermer */
        dlg.addEventListener("click", function (e) {
            if (e.target === dlg) { dlg.close(); }
        });

        /* le contenu copie ne suivrait pas un changement de langue : on ferme */
        document.addEventListener("langchange", function () { if (dlg.open) { dlg.close(); } });
    });
})();