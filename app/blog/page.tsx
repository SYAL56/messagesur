import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog – Arnaques et conseils de sécurité | MessageSûr",
  description: "Guides pratiques pour reconnaître les arnaques par SMS, email et téléphone. Vishing, faux colis, phishing… apprenez à vous protéger.",
  alternates: {
    canonical: "https://www.messagesur.bzh/blog",
  },
}

const articles = [
  {
    slug: 'faux-colis-ia',
    titre: "Arnaque au faux colis avec photo générée par IA",
    resume: "Des escrocs utilisent l'IA pour créer des photos de colis avec votre nom. Votre prénom sur l'étiquette ne prouve rien — voici comment les démasquer.",
    date: '19 mai 2026',
  },
  {
    slug: 'vishing',
    titre: "Vishing : l'arnaque au faux conseiller bancaire par téléphone",
    resume: "Quelqu'un vous appelle en se présentant comme votre banque ? Les 5 signes pour reconnaître l'arnaque et les bons réflexes.",
    date: '11 mai 2026',
  },
  {
    slug: 'chronopost',
    titre: "Faux SMS Chronopost : comment reconnaître l'arnaque",
    resume: "Vous avez reçu un SMS vous demandant de payer des frais de livraison Chronopost ? Voici comment vérifier s'il est légitime.",
    date: '1 mai 2026',
  },
  {
    slug: 'ameli',
    titre: "Faux SMS Ameli : arnaque à la carte Vitale",
    resume: "Des SMS frauduleux imitent l'Assurance Maladie pour voler vos données. Apprenez à les reconnaître.",
    date: '1 mai 2026',
  },
  {
    slug: 'impots',
    titre: "Faux email des impôts : remboursement ou menace ?",
    resume: "Vous avez reçu un email des impôts vous promettant un remboursement ou vous menaçant d'une amende ? Comment faire la différence.",
    date: '1 mai 2026',
  },
  {
    slug: 'faux-pv',
    titre: "Faux PV par SMS : l'arnaque aux amendes impayées",
    resume: "Des messages vous réclament le paiement d'une amende via un lien. Voici comment éviter le piège.",
    date: '1 mai 2026',
  },
  {
    slug: 'clic-suspect',
    titre: "J'ai cliqué sur un lien suspect : que faire ?",
    resume: "Pas de panique. Voici les étapes à suivre immédiatement si vous avez cliqué sur un lien frauduleux.",
    date: '1 mai 2026',
  },
]

export default function Blog() {
  return (
    <main className="blog-container">
      <h1>Blog MessageSûr</h1>
      <p className="blog-intro">Guides pratiques pour reconnaître et éviter les arnaques du quotidien.</p>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.slug} className="article-card">
            <Link href={`/blog/${article.slug}`}>
              <h2>{article.titre}</h2>
              <p>{article.resume}</p>
              <span className="article-date">{article.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
