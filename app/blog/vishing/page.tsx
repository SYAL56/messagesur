import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: 'Vishing : l\'arnaque au faux conseiller bancaire par téléphone',
  description: 'Comment reconnaître un faux appel de votre banque ? Les techniques des escrocs au téléphone et les réflexes pour se protéger.',
  openGraph: {
    title: 'Vishing : l\'arnaque au faux conseiller bancaire par téléphone',
    description: 'Les techniques des escrocs au téléphone et les réflexes pour se protéger du vishing.',
    url: 'https://www.messagesur.bzh/blog/vishing',
  },
  alternates: { canonical: '/blog/vishing' },
}

const signes = [
  { num:'1', titre:'On vous met la pression', texte:'L\'escroc insiste sur l\'urgence : « Il faut agir maintenant sinon votre compte sera vidé. » Un vrai conseiller ne vous pressera jamais de cette façon.' },
  { num:'2', titre:'On vous demande un code reçu par SMS', texte:'Votre banque ne vous demandera JAMAIS de communiquer un code de validation par téléphone. Ce code, c\'est la clé de vos transactions — le donner revient à autoriser un paiement.' },
  { num:'3', titre:'Le numéro affiché semble officiel', texte:'Les escrocs utilisent le « spoofing » : ils falsifient le numéro pour afficher celui de votre banque. Un numéro officiel ne garantit rien.' },
  { num:'4', titre:'On vous demande d\'installer une application', texte:'L\'escroc peut vous demander d\'installer un logiciel de prise en main à distance (TeamViewer, AnyDesk) pour « sécuriser » votre appareil. C\'est un piège.' },
  { num:'5', titre:'L\'interlocuteur connaît des détails sur vous', texte:'Ne vous fiez pas au fait qu\'il connaisse votre nom ou votre banque. Ces informations circulent sur internet après des fuites de données. Ça ne prouve pas qu\'il est légitime.' },
]

export default function ArticleVishing() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>11 mai 2026 · Arnaques téléphone</p>
        <h1 className={s.articleTitle}>Vishing : l'arnaque au faux conseiller bancaire par téléphone</h1>
        <p className={s.articleIntro}>Quelqu'un vous appelle en se présentant comme votre banque et vous demande d'agir vite pour « sécuriser votre compte ». Attention, c'est probablement une arnaque. On vous explique comment la reconnaître.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« Bonjour, ici le service fraude de votre banque. Nous avons détecté des opérations suspectes sur votre compte. Pour bloquer ces transactions, j'ai besoin de votre code de validation reçu par SMS. »</p>
      </div>

      <h2 className={s.h2}>Qu'est-ce que le vishing ?</h2>
      <div className={s.card}>
        <p>Le <strong>vishing</strong> (contraction de « voice » et « phishing ») est une arnaque par téléphone. L'escroc se fait passer pour votre banque, un service anti-fraude ou même la police. Il connaît souvent votre nom, votre banque, parfois même les derniers chiffres de votre carte — des informations récupérées via des fuites de données ou des arnaques précédentes par SMS.</p>
      </div>

      <h2 className={s.h2}>Les 5 signes d'un appel frauduleux</h2>
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

      <h2 className={s.h2}>Les bons réflexes</h2>
      <div className={s.card}>
        <p>
          <strong>Raccrochez</strong> — c'est le réflexe numéro un. Même si ça semble impoli, un vrai conseiller comprendra.<br/>
          <strong>Rappelez votre banque vous-même</strong> — utilisez le numéro figurant au dos de votre carte bancaire ou sur votre relevé, jamais celui donné par l'appelant.<br/>
          <strong>Ne communiquez jamais</strong> un code SMS, un mot de passe ou un identifiant par téléphone.<br/>
          <strong>Ne vous fiez pas au numéro affiché</strong> — il peut être falsifié.<br/>
          <strong>Prenez votre temps</strong> — un vrai problème bancaire peut attendre 5 minutes le temps de vérifier.
        </p>
      </div>

      <h2 className={s.h2}>Vous avez communiqué des informations ?</h2>
      <div className={s.card}>
        <p>
          1. <strong>Appelez votre banque immédiatement</strong> (le vrai numéro) pour faire opposition et signaler la fraude<br/>
          2. <strong>Changez vos mots de passe</strong> d'accès à votre banque en ligne<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          4. <strong>Signalez l'arnaque</strong> sur <strong>cybermalveillance.gouv.fr</strong><br/>
          5. Si vous avez installé un logiciel à distance, <strong>désinstallez-le</strong> et faites vérifier votre appareil
        </p>
      </div>

      <div className={s.calloutWarn}>
        <p><strong>💡 Le saviez-vous ?</strong> En France, la loi oblige votre banque à vous rembourser en cas de fraude, sauf si elle prouve une négligence grave de votre part. Conservez toutes les preuves (historique d'appels, SMS reçus, captures d'écran).</p>
      </div>

      <div className={s.ctaBox}>
        <p>Vous avez reçu un message ou SMS suspect ?</p>
        <a href="/" className={s.ctaBtn}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
