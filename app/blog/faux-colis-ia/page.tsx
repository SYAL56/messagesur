import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: "Arnaque au faux colis avec photo générée par IA | MessageSûr",
  description: "Des escrocs envoient des SMS avec une photo de colis à votre nom générée par IA. Votre prénom sur l'étiquette ne prouve rien — voici comment les démasquer.",
  openGraph: {
    title: "Arnaque au faux colis avec photo générée par IA",
    description: "Des escrocs envoient des SMS avec une photo de colis à votre nom générée par IA. Voici comment les démasquer.",
    url: 'https://www.messagesur.bzh/blog/faux-colis-ia',
  },
  alternates: { canonical: '/blog/faux-colis-ia' },
}

const raisons = [
  { num:'1', titre:'Votre nom et adresse sont vrais', texte:'Vos données circulent sur internet suite à des fuites massives (Free, France Travail, Viamedis…). Des millions de Français sont concernés. Les escrocs achètent ces listes et les utilisent pour personnaliser leurs messages.' },
  { num:'2', titre:'La photo du colis est réaliste', texte:"Grâce à l'IA générative, il suffit de quelques secondes pour créer une image d'un colis avec n'importe quel nom dessus. Ce n'est pas une preuve que le colis existe." },
  { num:'3', titre:'Le message vocal rassure', texte:"Entendre une voix (même synthétique) donne un sentiment de légitimité. Les vrais transporteurs n'appellent pourtant jamais pour demander un paiement." },
  { num:'4', titre:"L'urgence pousse à agir vite", texte:'« Votre colis sera retourné dans 48h » — cette fausse urgence empêche de réfléchir. Prenez toujours le temps de vérifier avant de cliquer ou de payer.' },
]

export default function ArticleFauxColisIA() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>19 mai 2026 · Arnaques par SMS</p>
        <h1 className={s.articleTitle}>Arnaque au faux colis avec photo générée par IA</h1>
        <p className={s.articleIntro}>Vous recevez un SMS avec un message vocal, une photo d'un colis portant votre nom et adresse, et un lien pour « reprogrammer la livraison ». Tout semble authentique. C'est pourtant une arnaque sophistiquée, en forte hausse en 2026.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« Bonjour, nous avons tenté de livrer votre colis. Veuillez cliquer sur le lien ci-dessous pour reprogrammer la livraison et régler les frais de réexpédition. »</p>
      </div>

      <h2 className={s.h2}>Comment fonctionne cette arnaque ?</h2>
      <div className={s.card}>
        <p>Les escrocs utilisent l'<strong>intelligence artificielle</strong> pour générer des photos réalistes de colis avec votre prénom et votre adresse inscrits sur l'étiquette. Le colis semble vrai, la photo est convaincante, et le SMS est personnalisé. Le message arrive souvent accompagné d'un <strong>message vocal automatique</strong> qui annonce une tentative de livraison échouée. Un lien vous invite ensuite à payer des « frais de réexpédition » ou à saisir vos coordonnées bancaires.</p>
      </div>

      <h2 className={s.h2}>Pourquoi ce message semble vrai</h2>
      <div className={s.stepList}>
        {raisons.map(item => (
          <div key={item.num} className={s.stepItem}>
            <div className={s.stepNum}>{item.num}</div>
            <div>
              <p className={s.stepTitle}>{item.titre}</p>
              <p className={s.stepBody}>{item.texte}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className={s.h2}>Les signaux d'alerte</h2>
      <div className={s.card}>
        <p>
          ⚠️ Le lien ne correspond pas au site officiel d'un transporteur connu (chronopost.fr, laposte.fr, dpd.fr…)<br/>
          ⚠️ Le domaine est bizarre : chiffres, mot aléatoire, extension inhabituelle (.pro, .xyz, .top…)<br/>
          ⚠️ On vous demande de <strong>payer pour recevoir un colis</strong> — les vrais transporteurs ne font jamais ça<br/>
          ⚠️ Vous n'attendez aucun colis<br/>
          ⚠️ Le numéro d'expéditeur est un mobile classique (06 ou 07), pas un numéro court professionnel
        </p>
      </div>

      <h2 className={s.h2}>Comment vérifier vous-même</h2>
      <div className={s.card}>
        <p>Si vous attendez vraiment un colis, <strong>ne cliquez pas sur le lien du SMS</strong>. Allez directement sur le site officiel du transporteur (tapez-le vous-même dans votre navigateur) et entrez votre numéro de suivi. Si vous n'avez pas de numéro de suivi, vérifiez dans la confirmation de commande reçue par email.<br/><br/>
        Un transporteur légitime ne vous demandera <strong>jamais de payer par SMS</strong> pour recevoir un colis.</p>
      </div>

      <h2 className={s.h2}>Les bons réflexes</h2>
      <div className={s.card}>
        <p>
          <strong>Ne cliquez pas</strong> sur le lien — même pour « voir »<br/>
          <strong>Ne payez rien</strong> et ne saisissez aucune donnée bancaire<br/>
          <strong>Transférez le SMS</strong> au 33700 (signalement gratuit des SMS frauduleux)<br/>
          <strong>Bloquez l'expéditeur</strong> et supprimez le message<br/>
          <strong>Prévenez vos proches</strong> — cette arnaque cible tout le monde
        </p>
      </div>

      <h2 className={s.h2}>Si vous avez cliqué ou payé</h2>
      <div className={s.card}>
        <p>
          1. <strong>Contactez immédiatement votre banque</strong> pour faire opposition — vous avez le droit d'être remboursé si vous signalez rapidement<br/>
          2. <strong>Changez vos mots de passe</strong> si vous avez saisi des identifiants<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          4. <strong>Signalez l'arnaque</strong> sur cybermalveillance.gouv.fr
        </p>
      </div>

      <div className={s.calloutWarn}>
        <p><strong>💡 Le saviez-vous ?</strong> En France, la loi oblige votre banque à vous rembourser en cas de fraude, sauf si elle prouve une négligence grave de votre part. Conservez toutes les preuves (captures d'écran du SMS, du lien, de la photo du colis).</p>
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
