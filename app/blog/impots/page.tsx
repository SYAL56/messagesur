import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: 'Arnaque aux impôts : faux remboursement et faux PV',
  description: 'Apprenez à repérer les faux emails et SMS des impôts qui promettent un remboursement. Les signes d\'arnaque et que faire.',
  openGraph: {
    title: 'Arnaque aux impôts : faux remboursement et faux PV',
    description: 'Comment reconnaître les faux messages des impôts et se protéger.',
    url: 'https://www.messagesur.bzh/blog/impots',
  },
  alternates: { canonical: '/blog/impots' },
}

const formes = [
  { emoji:'💰', titre:'Le faux remboursement', texte:"On vous annonce un trop-perçu d'impôt et on vous invite à cliquer sur un lien pour recevoir votre argent. En réalité, le remboursement se fait automatiquement sur votre compte bancaire enregistré, jamais via un lien SMS." },
  { emoji:'⚠️', titre:'La fausse mise à jour', texte:"On vous demande de mettre à jour vos informations fiscales sous peine de pénalité. L'administration fiscale ne fait jamais ce type de demande par SMS." },
  { emoji:'📊', titre:'La fausse déclaration crypto', texte:"Depuis 2026, des SMS ciblent les détenteurs de cryptomonnaies en les menaçant d'une majoration de 40% pour des transactions non déclarées. Le lien mène à un faux site copiant impots.gouv.fr." },
]

const signes = [
  { num:'1', titre:"Le message arrive par SMS", texte:"La DGFiP ne contacte jamais les contribuables par SMS pour un remboursement ou un paiement. Jamais." },
  { num:'2', titre:"Le lien ne pointe pas vers impots.gouv.fr", texte:"Le seul site officiel est impots.gouv.fr. Les faux sites utilisent des variantes comme impots-remb-gouv.fr ou impots-gouv-fr.com — ce sont des arnaques." },
  { num:'3', titre:"On vous promet un remboursement avec un montant précis", texte:"498,87€, 218,80€... Un montant non-rond est utilisé pour donner l'illusion d'un vrai calcul. En réalité, tout remboursement réel est versé automatiquement sur votre compte." },
  { num:'4', titre:"On vous demande vos coordonnées bancaires", texte:"L'administration fiscale connait déjà votre RIB. Elle ne vous demandera jamais de le ressaisir par SMS ou email." },
  { num:'5', titre:"L'adresse email ne finit pas par @dgfip.finances.gouv.fr", texte:"Si vous recevez un email des impôts, vérifiez l'adresse de l'expéditeur. Seules les adresses en @dgfip.finances.gouv.fr sont officielles." },
]

export default function ArticleImpots() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>4 mai 2026 · Arnaques SMS</p>
        <h1 className={s.articleTitle}>Arnaque aux impôts par SMS : comment la reconnaître ?</h1>
        <p className={s.articleIntro}>Vous avez reçu un SMS vous annonçant un remboursement d'impôt ou une déclaration à finaliser ? C'est très probablement une arnaque.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« DGFIP : Après recalcul de votre dossier fiscal, vous bénéficiez d'un remboursement de 498,87€. Réclamez-le ici : impots-remb-gouv.fr »</p>
      </div>

      <div className={s.calloutInfo}>
        <p>La règle absolue : les impôts ne vous contactent JAMAIS par SMS pour un remboursement ou un paiement.</p>
      </div>

      <h2 className={s.h2}>Pourquoi cette arnaque est si efficace ?</h2>
      <div className={s.card}>
        <p>Qui refuserait un remboursement de 498,87€ ? Les escrocs utilisent un montant précis (pas un chiffre rond) pour donner l'impression d'un vrai calcul administratif. Et avec la période de déclaration de revenus au printemps, le timing est parfait pour piéger les contribuables.</p>
      </div>

      <h2 className={s.h2}>Les formes les plus courantes</h2>
      <div className={s.stepList}>
        {formes.map((item, i) => (
          <div key={i} className={s.stepItem}>
            <div className={s.stepIcon}>{item.emoji}</div>
            <div>
              <p className={s.stepTitle}>{item.titre}</p>
              <p className={s.stepBody}>{item.texte}</p>
            </div>
          </div>
        ))}
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
          <strong>Signalez le SMS</strong> en le transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>En cas de doute</strong>, connectez-vous directement sur impots.gouv.fr via votre navigateur.
        </p>
      </div>

      <h2 className={s.h2}>Vous avez cliqué et saisi vos informations ?</h2>
      <div className={s.calloutDanger}>
        <p>
          1. <strong>Appelez votre banque immédiatement</strong> pour faire opposition<br/>
          2. <strong>Changez votre mot de passe</strong> sur impots.gouv.fr<br/>
          3. <strong>Surveillez vos comptes</strong> pour repérer les transactions suspectes<br/>
          4. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          5. <strong>Signalez</strong> sur <strong>cybermalveillance.gouv.fr</strong>
        </p>
      </div>

      <div className={s.ctaBox}>
        <p>Vous avez reçu un SMS des impôts suspect ?</p>
        <a href="/" className={s.ctaBtn}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
