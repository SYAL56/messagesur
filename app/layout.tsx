import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

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
  title: 'MessageSûr — Détectez les arnaques numériques en quelques secondes',
  description: 'Analysez vos SMS et emails suspects en un clic. Protégez vos proches des arnaques numériques.',
  keywords: 'arnaque, phishing, SMS, email, senior, protection, sécurité',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
  {children}
  <Analytics />
</body>
