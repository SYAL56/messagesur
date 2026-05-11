import Link from 'next/link'
import type { Metadata } from 'next'

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

export default function ArticleVishing() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>11 mai 2026 · Arnaques téléphone</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Vishing : l'arnaque au faux conseiller bancaire par téléphone</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Quelqu'un vous appelle en se présentant comme votre banque et vous demande d'agir vite pour « sécuriser votre compte ». Attention, c'est probablement une arnaque. On vous explique comment la reconnaître.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Bonjour, ici le service fraude de votre banque. Nous avons détecté des opérations suspectes sur votre compte. Pour bloquer ces transactions, j'ai besoin de votre code de validation reçu par SMS. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Qu'est-ce que le vishing ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Le <strong>vishing</strong> (contraction de « voice » et « phishing ») est une arnaque par téléphone. L'escroc se fait passer pour votre banque, un service anti-fraude ou même la police. Il connaît souvent votre nom, votre banque, parfois même les derniers chiffres de votre carte — des informations récupérées via des fuites de données ou des arnaques précédentes par SMS.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes d'un appel frauduleux</h2>

      {[
        { num:'1', titre:'On vous met la pression', texte:'L\'escroc insiste sur l\'urgence : « Il faut agir maintenant sinon votre compte sera vidé. » Un vrai conseiller ne vous pressera jamais de cette façon.' },
        { num:'2', titre:'On vous demande un code reçu par SMS', texte:'Votre banque ne vous demandera JAMAIS de communiquer un code de validation par téléphone. Ce code, c\'est la clé de vos transactions — le donner revient à autoriser un paiement.' },
        { num:'3', titre:'Le numéro affiché semble officiel', texte:'Les escrocs utilisent le « spoofing » : ils falsifient le numéro pour afficher celui de votre banque. Un numéro officiel ne garantit rien.' },
        { num:'4', titre:'On vous demande d\'installer une application', texte:'L\'escroc peut vous demander d\'installer un logiciel de prise en main à distance (TeamViewer, AnyDesk) pour « sécuriser » votre appareil. C\'est un piège.' },
        { num:'5', titre:'L\'interlocuteur connaît des détails sur vous', texte:'Ne vous fiez pas au fait qu\'il connaisse votre nom ou votre banque. Ces informations circulent sur internet après des fuites de données. Ça ne prouve pas qu\'il est légitime.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Raccrochez</strong> — c'est le réflexe numéro un. Même si ça semble impoli, un vrai conseiller comprendra.<br/>
          <strong>Rappelez votre banque vous-même</strong> — utilisez le numéro figurant au dos de votre carte bancaire ou sur votre relevé, jamais celui donné par l'appelant.<br/>
          <strong>Ne communiquez jamais</strong> un code SMS, un mot de passe ou un identifiant par téléphone.<br/>
          <strong>Ne vous fiez pas au numéro affiché</strong> — il peut être falsifié.<br/>
          <strong>Prenez votre temps</strong> — un vrai problème bancaire peut attendre 5 minutes le temps de vérifier.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Vous avez communiqué des informations ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Appelez votre banque immédiatement</strong> (le vrai numéro) pour faire opposition et signaler la fraude<br/>
          2. <strong>Changez vos mots de passe</strong> d'accès à votre banque en ligne<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          4. <strong>Signalez l'arnaque</strong> sur <strong>cybermalveillance.gouv.fr</strong><br/>
          5. Si vous avez installé un logiciel à distance, <strong>désinstallez-le</strong> et faites vérifier votre appareil
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> En France, la loi oblige votre banque à vous rembourser en cas de fraude, sauf si elle prouve une négligence grave de votre part. Conservez toutes les preuves (historique d'appels, SMS reçus, captures d'écran).
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un message ou SMS suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
