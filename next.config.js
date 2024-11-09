/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docus-test-cms-storage-us.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'docus-live-cms-storage-us.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'docus-live-crm-storage-us.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'docus-test-crm-storage-us.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'live-crm-storage.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-crm-storage.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  env: {
    APP_URL: process.env.APP_URL,
    INTERNAL_API_URL: process.env.INTERNAL_API_URL,
    CORE_API_URL: process.env.CORE_API_URL,
    SOCIAL_AUTH_REDIRECT_BASE: process.env.SOCIAL_AUTH_REDIRECT_BASE,
    GOOGLE_OAUTH_API_LINK: process.env.GOOGLE_OAUTH_API_LINK,
    DOCUS_GOOGLE_TAG_MANAGER_ID: process.env.DOCUS_GOOGLE_TAG_MANAGER_ID,
    DOCUS_GOOGLE_MEASUREMENT_ID: process.env.DOCUS_GOOGLE_MEASUREMENT_ID,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    MAINTENANCE_MODE_COOKIE_NAME: process.env.MAINTENANCE_MODE_COOKIE_NAME,
    NEXT_PUBLIC_AMPLITUDE_API_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
  },
  output: 'standalone',
};

module.exports = nextConfig;
