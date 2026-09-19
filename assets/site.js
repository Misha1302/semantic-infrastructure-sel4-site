(() => {
  const root = document.documentElement;
  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* storage may be unavailable in previews */ } }
  };
  const stored = storage.get('sio-theme');
  if (stored === 'dark' || stored === 'light') root.dataset.theme = stored;

  const themeButton = document.querySelector('[data-theme-toggle]');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      storage.set('sio-theme', next);
      themeButton.setAttribute('aria-label', `Use ${next === 'dark' ? 'light' : 'dark'} theme`);
    });
  }

  const navButton = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      const open = nav.dataset.open !== 'true';
      nav.dataset.open = String(open);
      navButton.setAttribute('aria-expanded', String(open));
    });
  }
})();
