import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sk', 'en'],
  localePrefix: 'as-needed',
  localeDetection: false,
  defaultLocale: 'sk',
});
