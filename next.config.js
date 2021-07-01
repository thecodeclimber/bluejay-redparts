const locales = ['en', 'ru', 'ar'];
const defaultLocale = 'en';

// noinspection JSUnusedGlobalSymbols
module.exports = {
  env: {
    DATABASE_URL:
      'mongodb+srv://lokeshBansal:lokesh@123@bluejay-sandbox.3wrb7.mongodb.net/bluejay?retryWrites=true&w=majority',
    // BASE_PATH:
    //   'https://bluejay-redparts-4zenebxpr-bluejay-fasteners.vercel.app',
    basePath: '',
    GRANT_TYPE: process.env.GRANT_TYPE,
    MANAGEMENT_CLIENT_ID: process.env.MANAGEMENT_CLIENT_ID,
    MANAGEMENT_CLIENT_SECRET: process.env.MANAGEMENT_CLIENT_SECRET,
    AUDIENCE: process.env.AUDIENCE,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  },
  basePath: '',

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
  generateEtags: false,
};
