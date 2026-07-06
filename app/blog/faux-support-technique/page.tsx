import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaque au faux support technique : Microsoft, Orange ou antivirus vous appellent ? | MessageSûr",
  description: "Un appel vous annonce que votre ordinateur est infecté ? C'est une arnaque. Voici comment fonctionne le faux support technique et comment réagir.",
  openGraph: {
    title: "Arnaque au faux support technique : Microsoft, Orange ou antivirus vous appellent ?",
    description: "Un appel vous annonce que votre ordinateur est infecté ? C'est une arnaque. Voici comment la reconnaître et quoi faire.",
    url: 'https://www.messagesur.bzh/blog/faux-support-technique',
  },
  alternates: { canonical: '/blog/faux-support-technique' },
}

export default function ArticleFauxSupportTechnique() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>6 juillet 2026 · Arnaques téléphoniques</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>🖥️ Faux support technique : quand Microsoft ou Orange vous appellent pour « sauver » votre ordinateur</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Le téléphone sonne. Une voix sérieuse vous annonce que votre ordinateur est infecté, que vos données sont en danger, et qu'un technicien peut tout régler à distance si vous leur donnez accès à votre machine. Tout semble officiel. C'est une arnaque — et l'une des plus lucratives d'Europe.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Bonjour, je vous appelle de la part de Microsoft. Nos systèmes ont détecté un virus sur votre ordinateur. Votre connexion internet est compromise et vos données personnelles sont exposées. Je dois intervenir immédiatement pour sécuriser votre machine. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment fonctionne cette arnaque</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Les escrocs se font passer pour des techniciens de Microsoft, Orange, SFR, Bouygues, Norton, McAfee ou d'autres marques reconnues. Ils prétendent avoir détecté un virus, une intrusion ou une fuite de données sur votre ordinateur. Pour « vous aider », ils vous demandent d'installer un logiciel de prise en main à distance (comme TeamViewer ou AnyDesk) — un outil réel et légitime, mais ici utilisé pour prendre le contrôle de votre machine.<br/><br/>
          Une fois connectés, ils peuvent voler vos mots de passe, vos fichiers bancaires, vos photos, et parfois chiffrer votre disque dur pour exiger une rançon. Ils vous facturent aussi souvent une « prestation de dépannage » entre 200 et 500 €.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes d'un faux support technique</h2>

      {[
        { num:'1', titre:'L\'appel n\'est pas sollicité', texte:'Microsoft, Orange, votre fournisseur d\'antivirus — aucune entreprise sérieuse ne vous appelle spontanément pour vous signaler un virus sur votre ordinateur. Ils n\'ont tout simplement pas accès à ces informations.' },
        { num:'2', titre:'On vous crée une fausse urgence', texte:'« Vous avez 24h avant que vos données soient effacées », « votre compte bancaire est déjà exposé »… La pression temporelle est conçue pour vous empêcher de réfléchir ou de vérifier.' },
        { num:'3', titre:'On vous demande d\'installer un logiciel', texte:'Le faux technicien vous guide pour installer TeamViewer, AnyDesk ou un équivalent. Ces outils sont légitimes, mais une fois installés, l\'escroc contrôle votre ordinateur comme s\'il était devant.' },
        { num:'4', titre:'On vous fait ouvrir l\'Observateur d\'événements', texte:'Astuce classique : ils vous font ouvrir un outil Windows (Observateur d\'événements ou cmd) qui affiche toujours des avertissements système normaux — et les présentent comme des « preuves » d\'infection.' },
        { num:'5', titre:'On vous demande de payer pour « débloquer » votre machine', texte:'La prestation coûte entre 150 et 500 €, parfois en bons cadeaux Amazon ou iTunes — un mode de paiement irréversible que les vraies entreprises n\'utilisent jamais.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Ce que Microsoft, Orange et les antivirus font vraiment</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Microsoft</strong> ne surveille pas votre ordinateur à distance et ne vous appellera jamais de façon proactive. Si Windows détecte un problème, c'est le logiciel lui-même qui vous en informe, sur votre écran — pas un appel téléphonique.<br/><br/>
          <strong>Votre opérateur</strong> (Orange, SFR, Bouygues…) peut surveiller votre connexion réseau, pas l'état de votre ordinateur. Il ne vous appellera pas pour vous parler d'un virus.<br/><br/>
          <strong>Votre antivirus</strong> vous alerte via son interface sur votre machine. Il ne passe pas par téléphone.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes face à l'appel</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Raccrochez immédiatement</strong> — vous n'avez aucune obligation de rester en ligne<br/>
          <strong>N'installez aucun logiciel</strong> qu'on vous demande de télécharger pendant l'appel<br/>
          <strong>Ne donnez aucun accès</strong> à votre ordinateur à distance<br/>
          <strong>Ne payez rien</strong> — ni par carte, ni en bons cadeaux<br/>
          <strong>Signalez l'appel</strong> sur cybermalveillance.gouv.fr<br/>
          <strong>Prévenez vos proches</strong> — les personnes âgées sont les premières ciblées
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez déjà donné accès à votre ordinateur</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Coupez immédiatement la connexion</strong> — débranchez le câble réseau ou désactivez le Wi-Fi<br/>
          2. <strong>Désinstallez le logiciel de prise en main</strong> (TeamViewer, AnyDesk…) via les paramètres de votre ordinateur<br/>
          3. <strong>Changez tous vos mots de passe</strong> depuis un autre appareil (téléphone, ordinateur d'un proche)<br/>
          4. <strong>Appelez votre banque immédiatement</strong> si vous avez saisi des informations bancaires ou autorisé un virement<br/>
          5. <strong>Faites analyser votre machine</strong> par un professionnel de confiance avant de la réutiliser<br/>
          6. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> En France, le faux support technique représente l'une des arnaques numériques les plus signalées sur cybermalveillance.gouv.fr. Les victimes perdent en moyenne entre 200 et 1 500 €. Les escrocs opèrent souvent depuis des centres d'appels situés à l'étranger, notamment en Inde ou en Afrique du Nord, et ciblent en priorité les personnes âgées et isolées.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un SMS ou un e-mail lié à cette arnaque ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
