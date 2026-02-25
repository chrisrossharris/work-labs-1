export type BookingMode = 'link' | 'embed';

export const bookingConfig = {
  mode: 'link' as BookingMode,
  calLink: 'https://cal.com/work-labs/intro',
  embedRoute: '/contact',
  embedHash: 'book',
  embedCode: ''
};

const ABSOLUTE_URL = /^https?:\/\//i;

function isAbsoluteUrl(value: string): boolean {
  return ABSOLUTE_URL.test(value);
}

function addParams(base: string, params: Record<string, string>): string {
  const url = new URL(base, 'https://worklabs.local');
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  if (isAbsoluteUrl(base)) return url.toString();
  return `${url.pathname}${url.search}${url.hash}`;
}

export function getBookingHref(params: Record<string, string> = {}): string {
  const base =
    bookingConfig.mode === 'link'
      ? bookingConfig.calLink
      : `${bookingConfig.embedRoute}${bookingConfig.embedHash ? `#${bookingConfig.embedHash}` : ''}`;

  return addParams(base, params);
}

export function getBookingLinkAttrs(params: Record<string, string> = {}): Record<string, string> {
  const href = getBookingHref(params);

  if (isAbsoluteUrl(href)) {
    return {
      href,
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }

  return {
    href,
    'data-transition-link': ''
  };
}

export const hasBookingEmbedCode = bookingConfig.embedCode.trim().length > 0;
