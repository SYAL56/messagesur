import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'
import styles from './clic-suspect.module.css'

export const metadata: Metadata = {
  title: 'J\'ai cliqué sur un lien suspect : que faire ?',
  description: 'Vous avez cliqué sur un lien douteux par erreur ? Voici les étapes à suivre immédiatement pour limiter les dégâts.',
  openGraph: {
    title: 'J\'ai cliqué sur un lien suspect : que faire ?',
    description: 'Les réflexes à avoir immédiatement après avoir cliqué sur un lien suspect.',
    url: 'https://www.messagesur.bzh/blog/clic-suspect',
  },
  alternates: { canonical: '/blog/clic-suspect' },
}

const situations = [
  {
    titre: 'Situation 1 — Vous avez cliqué mais n\'avez rien saisi',
    bgClass: 'situationSafe',
    risque: '🟢 Risque faible',
    actions: [
      'Fermez immédiatement la page',
      'Ne revenez pas sur ce lien',
      'Mettez à jour votre téléphone si ce n\'est pas fait',
    ]
  },
  {
    titre: 'Situation 2 — Vous avez saisi votre email ou mot de passe',
    bgClass: 'situationWarn',
    risque: '🟠 Risque moyen — agissez dans l\'heure',
    actions: [
      'Changez votre mot de passe sur le vrai site concerné',
      'Changez aussi votre mot de passe email',
      'Activez la double authentification',
      'Vérifiez les connexions suspectes sur vos comptes',
    ]
  },
  {
    titre: 'Situation 3 — Vous avez saisi vos coordonnées bancaires',
    bgClass: 'situationDanger',
    risque: '🔴 Risque élevé — chaque minute compte',
    actions: [
      'Appelez votre banque AU NUMÉRO AU DOS DE VOTRE CARTE',
      'Demandez le blocage immédiat de votre carte',
      'Signalez les transactions frauduleuses',
      'Déposez plainte à la police ou gendarmerie',
      'Signalez sur cybermalveillance.gouv.fr',
    ]
  },
]

export default function ArticleClicSuspect() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>24 avril 2026 · Que faire ?</p>
        <h1 className={s.articleTitle}>J'ai cliqué sur un lien suspect, que faire maintenant ?</h1>
        <p className={s.articleIntro}>Pas de panique. Tout dépend de ce que vous avez fait ensuite. Voici quoi faire dans les minutes qui suivent.</p>
      </div>

      <div className={s.calloutInfo}>
        <p>D'abord : respirez. Cliquer sur un lien suspect n'est pas forcément catastrophique. Ce qui compte c'est d'agir vite et dans le bon ordre.</p>
      </div>

      {situations.map((situation, i) => (
        <div key={i} className={`${s.card} ${styles[situation.bgClass]}`}>
          <h2 className={s.h2} style={{marginTop:0}}>{situation.titre}</h2>
          <p style={{fontSize:'0.85rem',fontWeight:500,marginBottom:'0.75rem'}}>{situation.risque}</p>
          <ul style={{paddingLeft:'1.2rem'}}>
            {situation.actions.map((action, j) => (
              <li key={j} style={{fontSize:'0.9rem',lineHeight:1.8}}>{action}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className={s.h2}>Les numéros utiles</h2>
      <div className={s.card}>
        <p style={{lineHeight:2}}>
          📞 <strong>Votre banque</strong> : numéro au dos de votre carte<br/>
          📱 <strong>Signalement SMS</strong> : transférez au <strong>33700</strong> (gratuit)<br/>
          💻 <strong>Cybermalveillance</strong> : cybermalveillance.gouv.fr<br/>
          🚔 <strong>Police/Gendarmerie</strong> : 17
        </p>
      </div>

      <div className={s.ctaBox}>
        <p>Évitez que ça se reproduise — vérifiez vos messages suspects avant de cliquer</p>
        <a href="/" className={s.ctaBtn}>Analyser un message sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
