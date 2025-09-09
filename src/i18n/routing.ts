import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sk', 'en'],
  localePrefix: 'always',
  localeDetection: false,
  defaultLocale: 'sk',
});
