import { supabase } from './supabase';

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
  if (!supabase) {
    console.warn('[analytics] supabase not configured — skipping page view');
    return;
  }
  const { error } = await supabase.from('page_views').insert({
    visitor_id: getVisitorId(),
    page_path: pagePath || window.location.pathname,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
    screen_w: window.screen.width,
    screen_h: window.screen.height,
    environment: APP_ENV,
  });
  if (error) console.error('[analytics] page_view insert failed:', error.message);
}

export async function trackClick(buttonName, metadata = {}) {
  if (!supabase) {
    console.warn('[analytics] supabase not configured — skipping click');
    return;
  }
  const { error } = await supabase.from('click_events').insert({
    visitor_id: getVisitorId(),
    button_name: buttonName,
    page_path: window.location.pathname,
    metadata,
    environment: APP_ENV,
  });
  if (error) console.error('[analytics] click_event insert failed:', error.message);
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
