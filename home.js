/**
 * Mintlify renders the page title + description before MDX. On the home page we want
 * the cover (Frame) first, then Projects + copy — so hide the auto header when the
 * home hero wrapper is present.
 */
(function () {
  function isHomePath() {
    const p = window.location.pathname;
    return p === '/' || p === '' || p === '/index';
  }

  function hideAutoHeader() {
    if (!isHomePath() || !document.getElementById('home-landing-root')) return;

    document.querySelectorAll('[data-component-name="page-title"], page-title, #page-title').forEach((el) => {
      el.style.setProperty('display', 'none', 'important');
    });
    document
      .querySelectorAll('[data-component-name="page-description"], .page-description')
      .forEach((el) => {
        el.style.setProperty('display', 'none', 'important');
      });
  }

  hideAutoHeader();
  const obs = new MutationObserver(hideAutoHeader);
  obs.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('popstate', hideAutoHeader);
})();
