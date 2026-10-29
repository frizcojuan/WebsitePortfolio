/* theme.js - toggle mode gelap/terang, dipakai semua halaman.
   Butuh elemen: <button id="themeToggle"> dan <span id="themeIcon"> di header.
   Pilihan tema disimpan di localStorage (key: "theme") sehingga ikut
   terbawa saat berpindah antar halaman. */
(function () {
  var toggleBtn = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  if (!toggleBtn || !icon) return;

  var moonIcon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var sunIcon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>';

  function apply(isDark) {
    document.body.classList.toggle('dark', isDark);
    icon.innerHTML = isDark ? sunIcon : moonIcon;
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved === 'dark' || (saved === null && prefersDark));

  toggleBtn.addEventListener('click', function () {
    var isDark = !document.body.classList.contains('dark');
    apply(isDark);
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  });
})();
