const CONSENT_KEY = 'site-consent';

const applyConsent = (choice) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: choice === 'accepted' ? 'granted' : 'denied'
  });
};

const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
};

const initCookieBanner = () => {
  const banner = document.querySelector('[data-cookie-banner]');
  if (!banner) return;

  const savedChoice = localStorage.getItem(CONSENT_KEY);
  if (savedChoice) {
    applyConsent(savedChoice);
    return;
  }

  banner.hidden = false;

  banner.querySelectorAll('[data-consent-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-consent-action');
      const choice = action === 'accept' ? 'accepted' : 'rejected';

      localStorage.setItem(CONSENT_KEY, choice);
      setCookie(CONSENT_KEY, choice, 180);
      applyConsent(choice);
      banner.hidden = true;
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
  initCookieBanner();
}
