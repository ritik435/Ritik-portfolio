const APP_ENV = import.meta.env.VITE_APP_ENV || (import.meta.env.PROD ? 'production' : 'staging');

let clickTrackingInit = false;

function getVisitorId() {
  const key = 'pf_visitor_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export async function trackPageView(pagePath) {
  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        visitor_id: getVisitorId(),
        page_path: pagePath || window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        screen_w: window.screen.width,
        screen_h: window.screen.height,
        environment: APP_ENV,
      }),
    });
    if (!res.ok) console.error('[analytics] page_view failed:', res.status);
  } catch (err) {
    console.error('[analytics] page_view failed:', err.message);
  }
}

export async function trackClick(buttonName, metadata = {}) {
  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'click',
        visitor_id: getVisitorId(),
        button_name: buttonName,
        page_path: window.location.pathname,
        metadata,
        environment: APP_ENV,
      }),
    });
    if (!res.ok) console.error('[analytics] click failed:', res.status);
  } catch (err) {
    console.error('[analytics] click failed:', err.message);
  }
}

export function initClickTracking() {
  if (clickTrackingInit) return;
  clickTrackingInit = true;
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (el) {
      trackClick(el.dataset.track, {
        href: el.href || null,
        text: el.textContent?.slice(0, 100) || null,
      });
    }
  });
}
