import Link from 'next/link'
import shared from '../shared.module.css'
import s from './blog.module.css'

const articles = [
  {
    slug: 'faux-colis-ia',
    titre: "Arnaque au faux colis avec photo générée par IA",
    resume: "Des escrocs utilisent l'IA pour créer des photos de colis avec votre nom. Votre prénom sur l'étiquette ne prouve rien — voici comment les démasquer.",
    date: '19 mai 2026',
    emoji: '📦',
  },
  {
    slug: 'vishing',
    titre: "Vishing : l'arnaque au faux conseiller bancaire par téléphone",
    resume: "Quelqu'un vous appelle en se présentant comme votre banque ? Les 5 signes pour reconnaître l'arnaque et les bons réflexes.",
    date: '11 mai 2026',
    emoji: '📞',
  },
  {
    slug: 'impots',
    titre: "Arnaque aux impôts par SMS : comment la reconnaître ?",
    resume: "Les impôts ne vous contactent jamais par SMS. Voici comment repérer ces arnaques et quoi faire.",
    date: '4 mai 2026',
    emoji: '🏛️',
  },
  {
    slug: 'faux-pv',
    titre: "Faux SMS d'amende : l'arnaque au PV qui explose en 2026",
    resume: "L'ANTAI n'envoie jamais de SMS. Voici comment reconnaître cette arnaque et quoi faire.",
    date: '27 avril 2026',
    emoji: '🚗',
  },
  {
    slug: 'chronopost',
    titre: "Faux SMS Chronopost : comment reconnaître l'arnaque ?",
    resume: "Ces messages vous demandent de payer des frais de livraison. Avant de cliquer, découvrez les 5 signes qui ne trompent pas.",
    date: '24 avril 2026',
    emoji: '📦',
  },
  {
    slug: 'ameli',
    titre: "Faux SMS Ameli : les signes qui ne trompent pas",
    resume: "L'Assurance Maladie ne vous contacte jamais par SMS pour vos données personnelles. Voici comment reconnaître ces arnaques.",
    date: '24 avril 2026',
    emoji: '🏥',
  },
  {
    slug: 'clic-suspect',
    titre: "J'ai cliqué sur un lien suspect, que faire maintenant ?",
    resume: "Pas de panique. Tout dépend de ce que vous avez fait ensuite. Voici quoi faire dans les minutes qui suivent.",
    date: '24 avril 2026',
    emoji: '🚨',
  },
]

export default function Blog() {
  return (
    <main className={s.main}>
      <header className={shared.header}>
        <div className={shared.logoMark}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M11 16.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className={shared.logoName}>MessageSûr</div>
          <div className={shared.logoTagline}>Protection contre les arnaques numériques</div>
        </div>
      </header>

      <h1 className={s.title}>Blog</h1>
      <p className={s.subtitle}>Guides pratiques pour reconnaître et éviter les arnaques numériques.</p>

      <div className={s.list}>
        {articles.map(article => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className={s.articleCard}>
            <div className={s.articleInner}>
              <div className={s.articleEmoji}>{article.emoji}</div>
              <div>
                <p className={s.articleDate}>{article.date}</p>
                <h2 className={s.articleTitle}>{article.titre}</h2>
                <p className={s.articleResume}>{article.resume}</p>
                <p className={s.articleCta}>Lire l'article →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={s.backLink}>
        <Link href="/">← Retour à l'accueil</Link>
      </div>
    </main>
  )
}
