import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: 'Faux SMS Chronopost : comment reconnaître l\'arnaque ?',
  description: 'Apprenez à reconnaître les faux SMS Chronopost qui vous demandent de payer des frais de livraison. Les 5 signes pour détecter l\'arnaque.',
  openGraph: {
    title: 'Faux SMS Chronopost : comment reconnaître l\'arnaque ?',
    description: 'Les 5 signes pour repérer un faux SMS Chronopost et les bons réflexes à adopter.',
    url: 'https://www.messagesur.bzh/blog/chronopost',
  },
  alternates: { canonical: '/blog/chronopost' },
}

const signes = [
  { num:'1', titre:'Vous n\'attendez aucun colis', texte:'Les escrocs envoient ces SMS en masse sans savoir si vous attendez une livraison. Si vous n\'avez rien commandé, méfiez-vous.' },
  { num:'2', titre:'On vous demande une petite somme', texte:'2,99€, 1,50€... Le montant est volontairement petit pour baisser votre garde. Une fois sur le faux site, on vous demandera vos coordonnées bancaires.' },
  { num:'3', titre:'Le lien dans le SMS est bizarre', texte:'Le vrai site de Chronopost est uniquement chronopost.fr. Tout autre domaine comme chronopost-livraison.fr ou chr0nopost.com est frauduleux.' },
  { num:'4', titre:'Le numéro expéditeur est inconnu', texte:'Un numéro étranger ou inhabituel doit vous alerter immédiatement.' },
  { num:'5', titre:'Le message contient des fautes', texte:'Les formulations maladroites et les fautes de français sont souvent le signe d\'un message traduit automatiquement.' },
]

export default function ArticleChronopost() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>24 avril 2026 · Arnaques SMS</p>
        <h1 className={s.articleTitle}>Faux SMS Chronopost : comment reconnaître l'arnaque ?</h1>
        <p className={s.articleIntro}>Vous avez reçu un SMS vous demandant de payer des frais de livraison pour recevoir un colis Chronopost ? Avant de cliquer sur quoi que ce soit, lisez ceci.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« Votre colis n'a pas pu être livré. Des frais de douane de 2,99€ sont dus. Réglez maintenant : http://chronopost-livraison.fr »</p>
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

      <h2 className={s.h2}>Que faire si vous recevez ce SMS ?</h2>
      <div className={s.card}>
        <p>
          <strong>Ne cliquez sur rien</strong> — même par curiosité.<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>Signalez-le</strong> en transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>En cas de doute</strong> sur une vraie livraison, allez directement sur chronopost.fr.
        </p>
      </div>

      <h2 className={s.h2}>Vous avez déjà cliqué ?</h2>
      <div className={s.card}>
        <p>
          1. Ne saisissez aucune information sur le site<br/>
          2. Fermez immédiatement la page<br/>
          3. Si vous avez entré vos coordonnées bancaires, <strong>appelez votre banque</strong> sans attendre<br/>
          4. Signalez l'arnaque sur <strong>cybermalveillance.gouv.fr</strong>
        </p>
      </div>

      <div className={s.ctaBox}>
        <p>Vous avez reçu un SMS suspect ?</p>
        <a href="/" className={s.ctaBtn}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
