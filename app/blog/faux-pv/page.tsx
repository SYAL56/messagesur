import Link from 'next/link'
import type { Metadata } from 'next'
import s from '../article.module.css'

export const metadata: Metadata = {
  title: 'Faux PV et fausses amendes : reconnaître l\'arnaque',
  description: 'Vous avez reçu un email ou SMS de contravention à payer ? C\'est probablement une arnaque. Voici comment la détecter.',
  openGraph: {
    title: 'Faux PV et fausses amendes : reconnaître l\'arnaque',
    description: 'Comment repérer les faux PV et fausses amendes envoyés par email ou SMS.',
    url: 'https://www.messagesur.bzh/blog/faux-pv',
  },
  alternates: { canonical: '/blog/faux-pv' },
}

const signes = [
  { num:'1', titre:"Le message arrive par SMS", texte:"L'ANTAI ne contacte jamais par SMS ni par email. Les vrais avis de contravention arrivent uniquement par courrier postal." },
  { num:'2', titre:"Le lien ne pointe pas vers amendes.gouv.fr", texte:"Le seul site officiel pour payer une amende est amendes.gouv.fr. Tout autre lien comme pv-amendes-france.com ou antai-paiement.fr est frauduleux." },
  { num:'3', titre:"On vous menace d'une majoration immédiate", texte:"En réalité, vous avez toujours 45 jours pour payer une amende forfaitaire. Aucune majoration ne tombe en quelques heures." },
  { num:'4', titre:"Le numéro expéditeur est un mobile", texte:"Un vrai organisme officiel n'envoie pas de SMS depuis un 06 ou 07. Si le numéro ressemble à un numéro de particulier, c'est une arnaque." },
  { num:'5', titre:"On vous demande vos coordonnées bancaires", texte:"Le faux site vous demande votre numéro de carte pour « payer l'amende ». En réalité, les escrocs récupèrent vos données pour vider votre compte." },
]

export default function ArticleFauxPV() {
  return (
    <main className={s.main}>
      <Link href="/blog" className={s.backLink}>← Retour au blog</Link>

      <div className={s.articleHeader}>
        <p className={s.articleMeta}>27 avril 2026 · Arnaques SMS</p>
        <h1 className={s.articleTitle}>Faux SMS d'amende : l'arnaque au PV qui explose en 2026</h1>
        <p className={s.articleIntro}>Vous avez reçu un SMS vous demandant de payer une contravention ? C'est une arnaque. Voici comment la reconnaître et quoi faire.</p>
      </div>

      <div className={s.calloutDanger}>
        <p>« INFO AMENDES : Votre PV n°2026-AF-4892 n'a pas été réglé. Passez au paiement pour éviter la majoration : pv-amendes-france.com/payer »</p>
      </div>

      <div className={s.calloutInfo}>
        <p>La règle absolue : l'ANTAI n'envoie JAMAIS de SMS pour payer une amende.</p>
      </div>

      <h2 className={s.h2}>Pourquoi cette arnaque marche si bien ?</h2>
      <div className={s.card}>
        <p>Tout le monde a peur de recevoir une amende. Les escrocs jouent sur cette angoisse en créant un sentiment d'urgence — « payez maintenant pour éviter la majoration ». Le montant est souvent petit (17€, 35€) pour vous pousser à payer sans réfléchir.</p>
      </div>

      <h2 className={s.h2}>Comment distinguer le vrai du faux ?</h2>
      <div className={s.card} style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
          <thead>
            <tr style={{borderBottom:'2px solid var(--cream-dark)'}}>
              <th style={{textAlign:'left',padding:'8px',color:'var(--warm-brown)'}}>Critère</th>
              <th style={{textAlign:'left',padding:'8px',color:'var(--safe-text)'}}>Vrai avis</th>
              <th style={{textAlign:'left',padding:'8px',color:'var(--danger-text)'}}>Faux SMS</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Canal','Courrier postal','SMS ou email'],
              ['Paiement','amendes.gouv.fr uniquement','Lien suspect'],
              ['Expéditeur','Courrier officiel ANTAI','Numéro mobile inconnu'],
              ['Urgence','Délai de 45 jours','« Payez immédiatement »'],
            ].map(([crit, vrai, faux], i) => (
              <tr key={i} style={{borderBottom:'1px solid var(--cream-dark)'}}>
                <td style={{padding:'8px',fontWeight:500,color:'var(--mid-brown)'}}>{crit}</td>
                <td style={{padding:'8px',color:'var(--mid-brown)'}}>{vrai}</td>
                <td style={{padding:'8px',color:'var(--mid-brown)'}}>{faux}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

      <h2 className={s.h2}>L'arnaque existe aussi en version papier !</h2>
      <div className={s.calloutWarn}>
        <p>Attention — des faux avis de contravention circulent aussi par courrier et sur les pare-brises. Ils ressemblent parfaitement à des documents officiels avec un faux numéro de dossier, un faux commissaire de justice et un IBAN personnel pour le paiement. En cas de doute, vérifiez toujours sur <strong>amendes.gouv.fr</strong> directement.</p>
      </div>

      <h2 className={s.h2}>Que faire si vous recevez ce SMS ?</h2>
      <div className={s.card}>
        <p>
          <strong>Ne cliquez sur rien</strong> — même par curiosité.<br/>
          <strong>Signalez le SMS</strong> en le transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>En cas de doute</strong> sur une vraie amende, allez directement sur amendes.gouv.fr.
        </p>
      </div>

      <h2 className={s.h2}>Vous avez déjà cliqué et saisi vos informations ?</h2>
      <div className={s.calloutDanger}>
        <p>
          1. <strong>Appelez votre banque immédiatement</strong> — demandez le blocage de votre carte<br/>
          2. <strong>Faites opposition</strong> sur les paiements suspects<br/>
          3. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          4. <strong>Signalez</strong> sur <strong>cybermalveillance.gouv.fr</strong><br/>
          5. <strong>Changez vos mots de passe</strong> si vous avez saisi des identifiants
        </p>
      </div>

      <div className={s.ctaBox}>
        <p>Vous avez reçu un SMS d'amende suspect ?</p>
        <a href="/" className={s.ctaBtn}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div className={s.footer}>
        <Link href="/blog">← Retour au blog</Link>
      </div>
    </main>
  )
}
