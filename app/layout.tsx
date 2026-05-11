import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    default: 'MessageSûr — Détectez les arnaques SMS, email et courrier',
    template: '%s | MessageSûr',
  },
  description: 'Analysez gratuitement vos SMS, emails et documents suspects en quelques secondes. Protégez vos proches des arnaques numériques.',
  keywords: 'arnaque, phishing, SMS frauduleux, email suspect, faux Chronopost, faux Ameli, protection, sécurité numérique, seniors, arnaque SMS, détecter arnaque, vérifier message',
  metadataBase: new URL('https://www.messagesur.bzh'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'LnByDeJoFakd0cskSphF-0JH-v0K_BbXdsrSrSMSuiU',
  },
  openGraph: {
    title: 'MessageSûr — Détectez les arnaques en quelques secondes',
    description: 'Copiez-collez un message suspect ou chargez une image. Notre IA vous dit si c\'est une arnaque.',
    url: 'https://www.messagesur.bzh',
    siteName: 'MessageSûr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MessageSûr — Détectez les arnaques en quelques secondes',
    description: 'Copiez-collez un message suspect ou chargez une image. Notre IA vous dit si c\'est une arnaque.',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MessageSûr',
    url: 'https://www.messagesur.bzh',
    description: 'Analysez gratuitement vos SMS, emails et documents suspects en quelques secondes.',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    inLanguage: 'fr',
  }

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
