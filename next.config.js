const locales = ['en', 'ru', 'ar'];
const defaultLocale = 'en';

// noinspection JSUnusedGlobalSymbols
module.exports = {
  env: {
    DATABASE_URL:
      'mongodb+srv://lokeshBansal:lokesh@123@bluejay-sandbox.3wrb7.mongodb.net/bluejay?retryWrites=true&w=majority',
  },
  async rewrites() {
    return [
      ...locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: '/' },
          { source: `/${locale}/:path*`, destination: '/:path*' },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ];
  },
  async redirects() {
    return [
      {
        source: `/${defaultLocale}{/}?`,
        destination: '/',
        permanent: true,
      },
      {
        source: `/${defaultLocale}/:path*`,
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};
