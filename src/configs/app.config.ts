import { onboardingRoutes, staticRoutes } from '@/utils/router/staticRoutes';

const appConfig = {
  siteName: 'Docus',
  copyright: `© ${new Date().getFullYear()} Docus`,
  sidebar: {
    sidebarWidth: 240,
    sidebarCollapsedWidth: 56,
    sidebarMobileWidth: '85%',
  },
  pages: {
    CHAT_HISTORY: {
      CARDS_PER_PAGE: 8,
    },
    REPORT: {
      CARDS_PER_PAGE: 8,
    },
    TEST_RESULTS: {
      CARDS_PER_PAGE: 8,
    },
  },
  externalUrls: {
    GOOGLE_OAUTH_API_LINK: `${process.env.SOCIAL_AUTH_REDIRECT_BASE}/google`,
    FACEBOOK_OAUTH_API_LINK: `${process.env.SOCIAL_AUTH_REDIRECT_BASE}/facebook`,
    TWITTER_OAUTH_API_LINK: `${process.env.SOCIAL_AUTH_REDIRECT_BASE}/twitter`,
    TERMS_OF_USE_URL: 'https://docus.ai/terms-of-use',
    PRIVACY_POLICY_URL: 'https://docus.ai/privacy-policy',
    COOKIE_POLICY_URL: 'https://docus.ai/cookie-policy',
  },
  pricing: {
    FREE: {
      MONTHLY: {
        price: '0',
      },
      YEARLY: {
        price: '0',
      },
    },
    LITE: {
      MONTHLY: {
        price: '5.99',
      },
      YEARLY: {
        price: '3.99',
        annual: '47.88',
        save: '33%',
      },
    },
    PRO: {
      MONTHLY: {
        price: '9.99',
        v2: '14.99',
      },
      YEARLY: {
        price: '7.99',
        annual: '95.88',
        save: '46%',
      },
    },
    PREMIUM: {
      MONTHLY: {
        price: '49.99',
      },
      YEARLY: {
        price: '39.99',
      },
    },
  },
  homepageUrl: staticRoutes.dashboard,
  onboardingUrl: onboardingRoutes.primaryGoal,
  cookiesExpirePeriod: 30,
  usps_url: 'https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=',
};

export default appConfig;
