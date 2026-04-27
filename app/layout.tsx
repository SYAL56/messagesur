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
  keywords: 'arnaque, phishing, SMS frauduleux, email suspect, faux Chronopost, faux Ameli, protection, sécurité numérique, seniors',
  verification: {
    google: '5Bss1vjj9StBapP-pOrTaUnG_XcXuO1QuywO0nMeXwE',
  },
  openGraph: {
    title: 'MessageSûr — Détectez les arnaques en quelques secondes',
    description: 'Copiez-collez un message suspect ou chargez une image. Notre IA vous dit si c\'est une arnaque.',
    url: 'https://www.messagesur.bzh',
    siteName: 'MessageSûr',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
