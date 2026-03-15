(function() {
  'use strict';

  // Dark mode toggle
  var themeToggle = document.querySelector('.theme-toggle');
  var html = document.documentElement;

  // Load saved preference, then OS preference, then time-based (dark 7pm-7am)
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var hour = new Date().getHours();
    var timeDark = hour >= 19 || hour < 7;
    if (prefersDark || timeDark) {
      html.setAttribute('data-theme', 'dark');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);

      if (window.renderMermaidDiagrams) {
        window.renderMermaidDiagrams(next === 'dark' ? 'dark' : 'default');
      }
    });
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
    });

    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
