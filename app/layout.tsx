import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Blitify - Discover Amazing Local Deals & Vendors',
    template: '%s | Blitify'
  },
  description: 'Blitify connects you with amazing local vendors and exclusive deals in your neighborhood. Find restaurants, shops, services, and save big while supporting local businesses.',
  keywords: [
    'local deals',
    'vendor marketplace',
    'neighborhood shopping',
    'local businesses',
    'restaurant deals',
    'shopping discounts',
    'community marketplace',
    'Blitify',
    'local commerce'
  ],
  authors: [{ name: 'Blitify' }],
  creator: 'Blitify',
  publisher: 'Blitify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blitify.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blitify.com',
    title: 'Blitify - Discover Amazing Local Deals & Vendors',
    description: 'Find exclusive deals and amazing products from trusted vendors in your neighborhood.',
    siteName: 'Blitify',
    images: [
      {
        url: '/Blitify-India-logo.png',
        width: 1200,
        height: 630,
        alt: 'Blitify - Local Vendor Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blitify - Discover Amazing Local Deals & Vendors',
    description: 'Find exclusive deals and amazing products from trusted vendors in your neighborhood.',
    images: ['/Blitify-India-logo.png'], // Replace with your actual Twitter image
    creator: '@blitify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/Blitify-India-logo.png' },
      { url: '/Blitify-India-logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/Blitify-India-logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/Blitify-India-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/Blitify-India-logo.png',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest', 
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Blitify",
              "url": "https://blitify.com",
              "description": "Local vendor marketplace connecting customers with amazing deals in their neighborhood",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://blitify.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Blitify",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://blitify.com/logo.png"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}