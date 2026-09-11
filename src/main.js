/* Restore AI Windows landing — theme, reveals, year */
(function () {
  "use strict";

  /* ---------- Theme: persisted + system-aware ---------- */
  var root = document.documentElement;
  var KEY = "restore-ai-windows-theme";

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#F5F5F8" : "#0A0B10");
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  applyTheme(stored || systemTheme());

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    var onMq = function () {
      var s = null;
      try { s = localStorage.getItem(KEY); } catch (e) {}
      if (!s) applyTheme(systemTheme());
    };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  function revealAll() { reveals.forEach(function (el) { el.classList.add("in"); }); }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    window.addEventListener("load", function () { setTimeout(revealAll, 700); });
  } else {
    revealAll();
  }

  /* ---------- Year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
