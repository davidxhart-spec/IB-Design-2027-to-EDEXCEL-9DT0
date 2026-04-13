// nav.js — injects shared navigation
(function() {
  var pages = [
    { href: 'index.html',       label: 'Home' },
    { href: 'sow.html',         label: 'SoW & NEA Guide' },
    { href: 'lesson1.html',     label: 'Lesson 1 Plan' },
    { href: 'onboarding.html',  label: 'Student Onboarding' },
    { href: 'lesson1-comparison.html', label: 'Lesson 1: IB ↔ Edexcel' },
    { href: 'syllabus-map.html',label: 'Full Syllabus Map' },
  ];

  var current = window.location.pathname.split('/').pop() || 'index.html';

  var links = pages.map(function(p) {
    var cls = (p.href === current) ? 'active' : '';
    return '<a href="' + p.href + '" class="' + cls + '">' + p.label + '</a>';
  }).join('');

  var nav = '<nav class="site-nav">'
    + '<a class="nav-brand" href="index.html">IB Design 2027 <span>→ 9DT0</span></a>'
    + '<div class="nav-links">' + links + '</div>'
    + '<div class="nav-print"><button onclick="window.print()">⎙ Print</button></div>'
    + '</nav>';

  document.write(nav);
})();
