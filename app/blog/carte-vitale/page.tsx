import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaque à la carte Vitale expirée : comment la reconnaître | MessageSûr",
  description: "Vous avez reçu un SMS vous demandant de renouveler votre carte Vitale ? L'Assurance Maladie ne contacte jamais par SMS. Voici comment reconnaître cette arnaque en forte hausse en 2026.",
  openGraph: {
    title: "Arnaque à la carte Vitale expirée : comment la reconnaître",
    description: "L'Assurance Maladie ne contacte jamais par SMS. Voici comment reconnaître cette arnaque en forte hausse en 2026.",
    url: 'https://www.messagesur.bzh/blog/carte-vitale',
  },
  alternates: { canonical: '/blog/carte-vitale' },
}

export default function ArticleCarteVitale() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>25 mai 2026 · Arnaques par SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaque à la carte Vitale expirée : comment la reconnaître</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un SMS vous informe que votre carte Vitale est expirée ou qu'une nouvelle version est disponible. Il vous invite à cliquer sur un lien pour la renouveler. C'est une arnaque — environ 50 000 victimes en 2026, et les signalements ont bondi de 20 %.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Votre carte Vitale arrive à expiration. Pour continuer à bénéficier de vos remboursements, mettez à jour vos informations en cliquant ici : ameli-renouvellement.fr »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Ce que vous devez savoir d'abord</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>La carte Vitale n'expire pas.</strong> Elle est valable à vie tant que votre situation ne change pas (changement de caisse, déménagement, etc.). Le renouvellement, quand il a lieu, se fait automatiquement par courrier postal — jamais par SMS. L'Assurance Maladie ne vous contactera <strong>jamais par SMS</strong> pour vous demander de cliquer sur un lien ou de saisir vos données.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes d'un SMS frauduleux</h2>

      {[
        { num:'1', titre:'Le SMS parle d\'expiration ou de renouvellement', texte:'La carte Vitale n\'expire pas. Tout message vous demandant de la renouveler d\'urgence par SMS est forcément frauduleux.' },
        { num:'2', titre:'Un lien vous redirige vers un site inconnu', texte:'Le seul site officiel de l\'Assurance Maladie est ameli.fr. Tout autre domaine (ameli-renouvellement.fr, carte-vitale-2026.com, etc.) est frauduleux, même s\'il ressemble à l\'original.' },
        { num:'3', titre:'On vous demande vos données personnelles ou bancaires', texte:'Le faux site copie l\'apparence d\'Ameli et vous demande votre numéro de sécurité sociale, vos coordonnées bancaires, ou une copie de votre pièce d\'identité.' },
        { num:'4', titre:'Le message crée une fausse urgence', texte:'« Vos remboursements seront suspendus », « délai de 48h »... Ces formules sont conçues pour vous faire agir vite, sans réfléchir.' },
        { num:'5', titre:'Le numéro d\'expéditeur est un mobile', texte:'L\'Assurance Maladie envoie ses rares SMS depuis des numéros courts officiels (36 46 pour Ameli), jamais depuis un 06 ou 07.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment vérifier vous-même</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Si vous avez un doute sur votre carte Vitale, connectez-vous directement sur <strong>ameli.fr</strong> (tapez l'adresse vous-même dans le navigateur, ne cliquez pas sur le lien du SMS). Votre espace personnel vous indiquera si une action est réellement nécessaire. Vous pouvez aussi appeler le <strong>36 46</strong> (numéro officiel de l'Assurance Maladie, gratuit).
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez pas</strong> sur le lien du SMS<br/>
          <strong>Ne saisissez aucune donnée</strong> personnelle ou bancaire<br/>
          <strong>Transférez le SMS</strong> au 33700 (signalement gratuit)<br/>
          <strong>Signalez-le</strong> sur cybermalveillance.gouv.fr<br/>
          <strong>Bloquez l'expéditeur</strong> et supprimez le message<br/>
          <strong>Prévenez vos proches</strong> — cette arnaque cible particulièrement les personnes âgées
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez cliqué ou saisi des données</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Contactez votre banque immédiatement</strong> si vous avez saisi des données bancaires — demandez le blocage de votre carte<br/>
          2. <strong>Changez vos mots de passe</strong> si vous avez utilisé les mêmes identifiants<br/>
          3. <strong>Signalez le vol d'identité</strong> sur cybermalveillance.gouv.fr<br/>
          4. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          5. <strong>Contactez l'Assurance Maladie</strong> au 36 46 pour les informer
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> Cette arnaque cible particulièrement les personnes âgées, moins familières avec les démarches en ligne. Parlez-en autour de vous — un proche prévenu est un proche protégé.
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
