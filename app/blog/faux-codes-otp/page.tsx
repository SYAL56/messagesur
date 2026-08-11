import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaque aux faux codes OTP par SMS : quand un code non demandé arrive",
  description: "Vous recevez un code de validation par SMS (type StripeLink) sans l'avoir demandé ? Ce n'est pas une erreur : c'est le signe qu'un escroc tente de s'introduire dans vos comptes.",
  openGraph: {
    title: "Arnaque aux faux codes OTP par SMS : quand un code non demandé arrive",
    description: "Un code de validation arrive alors que vous n'avez rien demandé ? Voici ce que ça signifie vraiment et comment réagir.",
    url: 'https://www.messagesur.bzh/blog/faux-codes-otp',
  },
  alternates: { canonical: '/blog/faux-codes-otp' },
}

export default function ArticleFauxCodesOTP() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>21 juillet 2026 · Arnaques par SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Vous recevez un code OTP que vous n'avez pas demandé ? C'est une attaque en cours</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un SMS avec un code à 6 chiffres arrive sur votre téléphone, du type « StripeLink : votre code de vérification est 482913 ». Vous n'avez rien demandé. Beaucoup de gens haussent les épaules et l'ignorent. C'est une erreur : ce code signifie qu'à cet instant précis, quelqu'un est en train d'essayer de s'introduire dans l'un de vos comptes — et il ne lui manque que ce code pour y arriver.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« StripeLink : votre code de vérification est 482913. Ne le partagez avec personne. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment fonctionne réellement cette arnaque</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          L'escroc a déjà une information sur vous : votre numéro de téléphone, et souvent votre adresse email ou un mot de passe volé lors d'une fuite de données. Il se rend sur le site d'une banque, d'une messagerie ou d'un service de paiement, saisit vos identifiants et déclenche volontairement l'envoi d'un code de vérification (OTP, pour « One-Time Password ») — ce code arrive alors sur <strong>votre</strong> téléphone, car c'est le vrai système de sécurité du service qui l'envoie. Le SMS que vous recevez est donc authentique. Ce qui ne l'est pas, c'est la personne qui suit juste après par SMS ou par appel, se faisant passer pour le service, et qui vous demande de lui « confirmer » ou « transmettre » ce code. Si vous le donnez, l'escroc l'utilise immédiatement pour valider sa connexion et prendre le contrôle du compte.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui doivent vous alerter</h2>

      {[
        { num:'1', titre:'Vous recevez un code que vous n\'avez pas demandé', texte:'C\'est le signal le plus important : un code OTP non sollicité signifie que quelqu\'un d\'autre a saisi votre numéro ou votre mot de passe quelque part, à cet instant précis.' },
        { num:'2', titre:'Un message ou un appel suit juste après', texte:'Quelques secondes ou minutes plus tard, un SMS ou un appel vous demande de « confirmer », « valider » ou « lire » le code reçu, parfois en se faisant passer pour votre banque, Google, WhatsApp ou un service de livraison.' },
        { num:'3', titre:'On vous met la pression', texte:'« Votre compte va être bloqué », « une commande frauduleuse est en cours », « confirmez immédiatement » — l\'urgence sert à vous empêcher de raccrocher et de vérifier par vous-même.' },
        { num:'4', titre:'L\'expéditeur usurpe un nom connu', texte:'Le SMS peut s\'afficher sous un nom d\'expéditeur familier (StripeLink, votre banque, un opérateur) via une technique de spoofing, ce qui le rend difficile à distinguer d\'un vrai message.' },
        { num:'5', titre:'On vous demande le code par téléphone, SMS ou messagerie', texte:'Aucun service légitime ne vous appelle ou ne vous écrit jamais pour vous demander de lui communiquer un code de vérification. Ce code est destiné uniquement à vous, sur le site ou l\'application officiels.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Que faire si vous recevez un code non sollicité</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Ne communiquez ce code à <strong>personne</strong>, quel que soit le moyen par lequel on vous le demande. Ensuite, connectez-vous directement au service concerné en tapant vous-même son adresse officielle (pas via un lien reçu) et changez immédiatement votre mot de passe : ce code arrive presque toujours parce qu\'un identifiant vous appartenant a déjà fuité ou a été deviné. Vérifiez aussi l\'activité récente et les appareils connectés au compte, et activez la double authentification si ce n\'est pas déjà fait.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne transmettez jamais</strong> un code OTP, même à un « conseiller »<br/>
          <strong>Ne rappelez pas</strong> le numéro qui vous a contacté après le SMS<br/>
          <strong>Changez votre mot de passe</strong> sur le service concerné, en y accédant directement<br/>
          <strong>Activez la double authentification</strong> par application plutôt que par SMS quand c'est possible<br/>
          <strong>Signalez le SMS</strong> au 33700 et sur cybermalveillance.gouv.fr
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez déjà communiqué le code</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Changez immédiatement le mot de passe</strong> du compte concerné, depuis un autre appareil si possible<br/>
          2. <strong>Déconnectez toutes les sessions actives</strong> dans les paramètres de sécurité du compte<br/>
          3. <strong>Contactez votre banque</strong> sans délai s'il s'agit d'un compte bancaire ou de paiement, pour faire opposition<br/>
          4. <strong>Vérifiez et changez les mots de passe</strong> réutilisés sur d'autres services<br/>
          5. <strong>Déposez plainte</strong> et signalez la fraude sur cybermalveillance.gouv.fr
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> Cette technique s'appelle le « OTP bombing » ou « OTP phishing ». Elle ne repose sur aucune faille technique : l'escroc utilise le vrai système de sécurité du service contre vous-même, en comptant sur le fait qu'un code officiel inspire confiance. Recevoir un code non sollicité n'est jamais un hasard ni une erreur d'un tiers — c'est la preuve qu'une tentative de connexion à l'un de vos comptes est en cours au moment même où vous le recevez.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un SMS suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
