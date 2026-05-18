import Link from 'next/link'
import type { Metadata } from 'next'

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

export default function ArticleFauxColisIA() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>19 mai 2026 · Arnaques par SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaque au faux colis avec photo générée par IA</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous recevez un SMS avec un message vocal, une photo d'un colis portant votre nom et adresse, et un lien pour « reprogrammer la livraison ». Tout semble authentique. C'est pourtant une arnaque sophistiquée, en forte hausse en 2026.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Bonjour, nous avons tenté de livrer votre colis. Veuillez cliquer sur le lien ci-dessous pour reprogrammer la livraison et régler les frais de réexpédition. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment fonctionne cette arnaque ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Les escrocs utilisent l'<strong>intelligence artificielle</strong> pour générer des photos réalistes de colis avec votre prénom et votre adresse inscrits sur l'étiquette. Le colis semble vrai, la photo est convaincante, et le SMS est personnalisé. Le message arrive souvent accompagné d'un <strong>message vocal automatique</strong> qui annonce une tentative de livraison échouée. Un lien vous invite ensuite à payer des « frais de réexpédition » ou à saisir vos coordonnées bancaires.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi ce message semble vrai</h2>

      {[
        { num:'1', titre:'Votre nom et adresse sont vrais', texte:'Vos données circulent sur internet suite à des fuites massives (Free, France Travail, Viamedis…). Des millions de Français sont concernés. Les escrocs achètent ces listes et les utilisent pour personnaliser leurs messages.' },
        { num:'2', titre:'La photo du colis est réaliste', texte:"Grâce à l'IA générative, il suffit de quelques secondes pour créer une image d'un colis avec n'importe quel nom dessus. Ce n'est pas une preuve que le colis existe." },
        { num:'3', titre:'Le message vocal rassure', texte:"Entendre une voix (même synthétique) donne un sentiment de légitimité. Les vrais transporteurs n'appellent pourtant jamais pour demander un paiement." },
        { num:'4', titre:"L'urgence pousse à agir vite", texte:'« Votre colis sera retourné dans 48h » — cette fausse urgence empêche de réfléchir. Prenez toujours le temps de vérifier avant de cliquer ou de payer.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les signaux d'alerte</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          ⚠️ Le lien ne correspond pas au site officiel d'un transporteur connu (chronopost.fr, laposte.fr, dpd.fr…)<br/>
          ⚠️ Le domaine est bizarre : chiffres, mot aléatoire, extension inhabituelle (.pro, .xyz, .top…)<br/>
          ⚠️ On vous demande de <strong>payer pour recevoir un colis</strong> — les vrais transporteurs ne font jamais ça<br/>
          ⚠️ Vous n'attendez aucun colis<br/>
          ⚠️ Le numéro d'expéditeur est un mobile classique (06 ou 07), pas un numéro court professionnel
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment vérifier vous-même</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Si vous attendez vraiment un colis, <strong>ne cliquez pas sur le lien du SMS</strong>. Allez directement sur le site officiel du transporteur (tapez-le vous-même dans votre navigateur) et entrez votre numéro de suivi. Si vous n'avez pas de numéro de suivi, vérifiez dans la confirmation de commande reçue par email.<br/><br/>
          Un transporteur légitime ne vous demandera <strong>jamais de payer par SMS</strong> pour recevoir un colis.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez pas</strong> sur le lien — même pour « voir »<br/>
          <strong>Ne payez rien</strong> et ne saisissez aucune donnée bancaire<br/>
          <strong>Transférez le SMS</strong> au 33700 (signalement gratuit des SMS frauduleux)<br/>
          <strong>Bloquez l'expéditeur</strong> et supprimez le message<br/>
          <strong>Prévenez vos proches</strong> — cette arnaque cible tout le monde
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez cliqué ou payé</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Contactez immédiatement votre banque</strong> pour faire opposition — vous avez le droit d'être remboursé si vous signalez rapidement<br/>
          2. <strong>Changez vos mots de passe</strong> si vous avez saisi des identifiants<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          4. <strong>Signalez l'arnaque</strong> sur cybermalveillance.gouv.fr
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> En France, la loi oblige votre banque à vous rembourser en cas de fraude, sauf si elle prouve une négligence grave de votre part. Conservez toutes les preuves (captures d'écran du SMS, du lien, de la photo du colis).
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
