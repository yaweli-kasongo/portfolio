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
            btn.setAttribute("aria-label", dark ? "Passer au thème clair" : "Passer au thème sombre");
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
    });
})();