import { supabase } from './supabase';

function getVisitorId() {
  const key = 'pf_visitor_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function trackPageView(pagePath) {
  if (!supabase) return;
  const visitor_id = getVisitorId();
  supabase.from('page_views').insert({
    visitor_id,
    page_path: pagePath || window.location.pathname,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
    screen_w: window.screen.width,
    screen_h: window.screen.height,
  }).then();
}

export function trackClick(buttonName, metadata = {}) {
  if (!supabase) return;
  const visitor_id = getVisitorId();
  supabase.from('click_events').insert({
    visitor_id,
    button_name: buttonName,
    page_path: window.location.pathname,
    metadata,
  }).then();
}

export function initClickTracking() {
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
