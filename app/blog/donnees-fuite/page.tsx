import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vos données ont-elles fuité ? Vérifiez avec HaveIBeenPwned | MessageSûr",
  description: "Des millions de Français ont leurs données exposées sans le savoir. HaveIBeenPwned permet de vérifier en quelques secondes si votre email a été compromis. Mode d'emploi.",
  openGraph: {
    title: "Vos données ont-elles fuité ? Vérifiez avec HaveIBeenPwned",
    description: "Des millions de Français ont leurs données exposées sans le savoir. Voici comment vérifier et quoi faire.",
    url: 'https://www.messagesur.bzh/blog/donnees-fuite',
  },
  alternates: { canonical: '/blog/donnees-fuite' },
}

export default function ArticleDonneesFuite() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>15 juin 2026 · Protection des données</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Vos données personnelles ont-elles fuité ? Comment le vérifier en 2 minutes</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Votre adresse email circule peut-être sur des forums de hackers sans que vous le sachiez. Des milliards d'identifiants volés lors de fuites de données sont accessibles en ligne. HaveIBeenPwned est l'outil de référence pour savoir si vous êtes concerné — gratuit, fiable, et utilisable en quelques secondes.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi c'est important</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Quand une entreprise subit une fuite de données, les informations volées (email, mot de passe, numéro de téléphone, adresse postale…) sont souvent revendues sur le dark web, puis compilées dans des bases massives que les escrocs utilisent pour :<br/><br/>
          • <strong>Envoyer des SMS et emails de phishing ciblés</strong> — ils connaissent votre nom, parfois votre opérateur ou votre banque<br/>
          • <strong>Tester vos mots de passe</strong> sur d'autres services (attaque par credential stuffing)<br/>
          • <strong>Usurper votre identité</strong> en combinant plusieurs fuites pour reconstituer un profil complet<br/><br/>
          Le problème : la plupart des victimes ne sont pas prévenues. Les entreprises mettent parfois des mois à détecter une fuite, et les notifications sont rares.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 4 étapes pour vérifier avec HaveIBeenPwned</h2>

      {[
        { num:'1', titre:'Rendez-vous sur haveibeenpwned.com', texte:'Tapez l\'adresse directement dans votre navigateur. Le site est géré par Troy Hunt, chercheur en cybersécurité reconnu mondialement. Ne passez pas par un lien reçu par email ou SMS — tapez l\'adresse vous-même.' },
        { num:'2', titre:'Saisissez votre adresse email', texte:'Entrez l\'email que vous utilisez pour vos comptes en ligne (banque, shopping, réseaux sociaux…). Le site ne conserve pas votre email et ne vous envoie rien sans votre accord. Vous pouvez tester plusieurs adresses.' },
        { num:'3', titre:'Lisez les résultats', texte:'Si votre email apparaît dans des fuites, le site vous liste les sources : nom de la fuite, date, type de données compromises (mot de passe, numéro de téléphone, adresse…). "Oh no — pwned !" signifie que vous êtes concerné. "Good news — no pwnage found !" signifie que votre email n\'apparaît dans aucune fuite connue.' },
        { num:'4', titre:'Agissez en fonction des résultats', texte:'Pour chaque fuite qui inclut un mot de passe : changez-le immédiatement sur le service concerné ET sur tous les autres sites où vous utilisez le même mot de passe. Si la fuite mentionne votre numéro de téléphone, soyez particulièrement vigilant aux SMS suspects dans les semaines suivantes.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Peut-on faire confiance à HaveIBeenPwned ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Oui — et c'est une question légitime, puisqu'on y entre son adresse email. Voici pourquoi le site est digne de confiance :<br/><br/>
          <strong>Créé en 2013 par Troy Hunt</strong>, l'un des chercheurs en sécurité les plus respectés au monde, conférencier Microsoft MVP et auteur reconnu.<br/><br/>
          <strong>Partenaire officiel de gouvernements</strong> : le FBI, la police nationale australienne, et d'autres agences gouvernementales transmettent des données à HaveIBeenPwned pour enrichir sa base.<br/><br/>
          <strong>Architecture k-anonymat pour les mots de passe</strong> : si vous vérifiez un mot de passe, seul un hachage partiel est envoyé — jamais le mot de passe lui-même.<br/><br/>
          <strong>Aucune publicité, aucune revente de données</strong> : le modèle économique repose sur des API payantes pour les entreprises, pas sur vos données personnelles.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Que faire si vos données ont fuité ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Changez votre mot de passe</strong> sur le service concerné, et sur tous ceux où vous utilisez le même — c'est la priorité absolue<br/>
          2. <strong>Activez la double authentification (2FA)</strong> sur vos comptes importants (email, banque, réseaux sociaux) : même si votre mot de passe fuite à nouveau, l'accès sera bloqué<br/>
          3. <strong>Utilisez un gestionnaire de mots de passe</strong> (Bitwarden, 1Password…) pour avoir un mot de passe unique et solide sur chaque site<br/>
          4. <strong>Surveillez vos relevés bancaires</strong> si la fuite inclut des données financières<br/>
          5. <strong>Méfiez-vous des contacts inattendus</strong> : un email ou SMS qui cite votre nom ou mentionne un service où vos données ont fuité peut être une tentative d'arnaque ciblée<br/>
          6. <strong>Signalez à la CNIL</strong> sur cnil.fr si vous pensez que vos droits n'ont pas été respectés (pas de notification par l'entreprise, utilisation abusive…)
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>🔍 Le saviez-vous ?</strong> Des millions de Français ont été touchés par des fuites récentes majeures : <strong>Free</strong> (données de 19 millions de clients en 2024, dont IBAN), <strong>France Travail</strong> (ex-Pôle Emploi — 43 millions de personnes concernées en 2024), et <strong>Viamedis</strong> (données de santé de 33 millions d'assurés en 2024). Si vous étiez client ou utilisateur de ces services, considérez que vos données circulent probablement déjà.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous recevez des SMS ou emails suspects depuis une fuite de données ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-les gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
