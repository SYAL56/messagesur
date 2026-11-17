import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez MessageSûr, l'outil gratuit qui aide à détecter les arnaques par SMS, email et courrier et à protéger vos proches.",
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
