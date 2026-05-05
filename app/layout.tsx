import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elevenxdesk.com'),
  alternates: {
    canonical: '/',
  },
  applicationName: 'Elevenxdesk',
  title: {
    default: 'Elevenxdesk | Desk to Cloud - Enterprise IT Solutions & Cloud Services',
    template: '%s | Elevenxdesk',
  },
  description: 'Elevenxdesk (also searched as Elevendesk) delivers practical IT services from desk to cloud. Cloud migration, cybersecurity, managed IT, software development, and IT consulting for UAE and India businesses.',
  keywords: ['elevenxdesk', 'elevendesk', 'it services dubai', 'it company ahmedabad', 'cloud solutions', 'cybersecurity', 'managed IT', 'software development', 'digital transformation', 'it consulting', 'cloud migration', 'it support'],
  authors: [{ name: 'Elevenxdesk' }],
  creator: 'Elevenxdesk',
  publisher: 'Elevenxdesk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://elevenxdesk.com',
    siteName: 'Elevenxdesk',
    title: 'Elevenxdesk | Desk to Cloud - IT Services in Dubai & Ahmedabad',
    description: 'Practical cloud, cybersecurity, and managed IT services for UAE and India businesses.',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Elevenxdesk - Desk to Cloud IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevenxdesk | Desk to Cloud - IT Services',
    description: 'Cloud, cybersecurity, and managed IT services for UAE and India teams.',
    images: ['/images/logo.png'],
    creator: '@elevenxdesk',
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
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1628' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elevenxdesk',
    alternateName: ['Elevendesk', 'Eleven X Desk'],
    url: 'https://elevenxdesk.com',
    logo: 'https://elevenxdesk.com/images/logo.png',
    description:
      'Elevenxdesk provides cloud, cybersecurity, managed IT, and software solutions from Dubai and Ahmedabad.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+97145728900',
        contactType: 'customer service',
        areaServed: ['AE', 'IN'],
        availableLanguage: ['en'],
      },
    ],
    sameAs: [
      'https://linkedin.com/company/elevenxdesk',
      'https://twitter.com/elevenxdesk',
      'https://facebook.com/elevenxdesk',
      'https://youtube.com/@elevenxdesk',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elevenxdesk',
    alternateName: 'Elevendesk',
    url: 'https://elevenxdesk.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://elevenxdesk.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
