import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: 'Arnaque Ameli : faux emails et SMS de l\'Assurance Maladie',
  description: 'Comment reconnaître un faux email ou SMS Ameli ? Les techniques des escrocs et les réflexes pour se protéger.',
  openGraph: {
    title: 'Arnaque Ameli : faux emails et SMS de l\'Assurance Maladie',
    description: 'Comment reconnaître un faux email ou SMS Ameli et se protéger.',
    url: 'https://www.messagesur.bzh/blog/ameli',
  },
  alternates: { canonical: '/blog/ameli' },
}

const signes = [
  { num:'1', titre:'L\'Ameli ne demande jamais vos données par SMS', texte:'Sans exception. Si vous recevez ce type de message, c\'est une arnaque.' },
  { num:'2', titre:'Le lien ne pointe pas vers ameli.fr', texte:'Le vrai site est uniquement ameli.fr. Tout autre domaine comme ameli-update.fr ou ameli-remboursement.fr est frauduleux.' },
  { num:'3', titre:'On crée une urgence artificielle', texte:'"Votre carte vitale expire", "Sous 48h"... Ces formulations sont conçues pour vous faire agir vite sans réfléchir.' },
  { num:'4', titre:'On vous demande vos coordonnées bancaires', texte:'L\'Ameli connaît déjà votre RIB. Elle ne vous demandera jamais de le ressaisir par SMS.' },
  { num:'5', titre:'Votre carte vitale n\'expire pas comme ça', texte:'La carte vitale n\'a pas de date d\'expiration liée à votre santé. Ne vous laissez pas piéger.' },
]

export default function ArticleAmeli() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>24 avril 2026 · Arnaques SMS</p>
        <h1 className={s.articleTitle}>Faux SMS Ameli : les signes qui ne trompent pas</h1>
        <p className={s.articleIntro}>Vous avez reçu un SMS de l'Assurance Maladie vous demandant de mettre à jour votre carte vitale ? C'est très probablement une arnaque.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« AMELI : Votre carte vitale expire le 30/04. Mettez à jour vos informations pour continuer à être remboursé : http://ameli-update.fr/validation »</p>
      </div>

      <h2 className={s.h2}>La règle d'or</h2>
      <div className={s.calloutInfo}>
        <p>L'Ameli ne vous contacte jamais par SMS pour vos données personnelles.</p>
      </div>

      <h2 className={s.h2}>Les 5 signes qui ne trompent pas</h2>
      <div className={s.stepList}>
        {signes.map(item => (
          <div key={item.num} className={s.stepItem}>
            <div className={s.stepNum}>{item.num}</div>
            <div>
              <p className={s.stepTitle}>{item.titre}</p>
              <p className={s.stepBody}>{item.texte}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className={s.h2}>Que faire ?</h2>
      <div className={s.card}>
        <p>
          <strong>Ne cliquez sur rien</strong> et supprimez le message.<br/>
          <strong>Signalez-le</strong> au <strong>33700</strong> (gratuit).<br/>
          <strong>En cas de doute</strong>, connectez-vous directement sur ameli.fr.
        </p>
      </div>

      <h2 className={s.h2}>Vous avez saisi vos informations ?</h2>
      <div className={s.card}>
        <p>
          1. <strong>Appelez votre banque</strong> immédiatement<br/>
          2. <strong>Changez vos mots de passe</strong><br/>
          3. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          4. Signalez sur <strong>cybermalveillance.gouv.fr</strong>
        </p>
      </div>

      <div className={s.ctaBox}>
        <p>Vous avez reçu un SMS Ameli suspect ?</p>
        <a href="/" className={s.ctaBtn}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
