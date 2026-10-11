const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.nrichsports.com';

export const siteConfig = {
  name: "NRICH Sports Marketplace",
  shortName: "N'RICH",
  tagline: 'Elite youth sports programs, seasons, and merchandise',
  description:
    "Discover NRICH sports programs, register for seasons and activities, explore league standings, training calendars, and official merchandise. Professional coaching for champions.",
  url: siteUrl,
  locale: 'en_US',
  themeColor: '#2956FF',
  keywords: [
    'NRICH',
    'youth sports',
    'sports marketplace',
    'soccer programs',
    'basketball training',
    'sports registration',
    'summer camps',
    'league standings',
    'sports merchandise',
  ],
  contact: {
    phone: '888.555.NRICH',
    email: 'hello@nrichsports.com',
    website: 'www.nrichsports.com',
  },
  social: {
    // Update when official profiles exist
    twitter: '@nrichsports',
  },
} as const;

export const publicRoutes = [
  { path: '/', title: 'Home', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/programs', title: 'Programs', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/activities', title: 'Activities', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/locations', title: 'Locations', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/merchandise', title: 'Merchandise', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/media', title: 'Media', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/seasons/calendar', title: 'Training Calendar', priority: 0.85, changeFrequency: 'daily' as const },
  { path: '/seasons/league', title: 'League Standings', priority: 0.85, changeFrequency: 'daily' as const },
  { path: '/seasons/tryout-portal', title: 'Tryout Portal', priority: 0.9, changeFrequency: 'weekly' as const },
];

export function pageMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description?: string;
  path?: string;
}): import('next').Metadata {
  const desc = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description: desc,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.shortName}`,
      description: desc,
    },
  };
}
