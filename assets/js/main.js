(function() {
  'use strict';

  // Dark mode toggle
  var themeToggle = document.querySelector('.theme-toggle');
  var html = document.documentElement;

  function updateThemeToggleLabel() {
    var label = html.getAttribute('data-theme') === 'dark'
      ? 'Switch to light mode'
      : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
  }

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
    updateThemeToggleLabel();

    themeToggle.addEventListener('click', function() {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeToggleLabel();

      if (window.renderMermaidDiagrams) {
        window.renderMermaidDiagrams(next === 'dark' ? 'dark' : 'default');
      }
    });
  }
})();
