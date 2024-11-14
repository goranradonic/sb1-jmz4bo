/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en'],
    localeDetection: true,
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'sr',
      }
    ]
  },
  reactStrictMode: true,
}