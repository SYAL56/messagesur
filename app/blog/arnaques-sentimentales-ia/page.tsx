import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaques sentimentales par chatbot IA sur les applis de rencontre | MessageSûr",
  description: "Un profil séduisant, des photos volées, et derrière l'écran... un chatbot IA. Voici comment reconnaître les arnaques sentimentales boostées à l'intelligence artificielle et vous en protéger.",
  openGraph: {
    title: "Arnaques sentimentales par chatbot IA sur les applis de rencontre",
    description: "Un profil séduisant, des photos volées, et derrière l'écran... un chatbot IA. Voici comment reconnaître ces arnaques et vous en protéger.",
    url: 'https://www.messagesur.bzh/blog/arnaques-sentimentales-ia',
  },
  alternates: { canonical: '/blog/arnaques-sentimentales-ia' },
}

export default function ArticleArnaquesSentimentalesIA() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>13 juillet 2026 · Arnaques sentimentales</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaques sentimentales par chatbot IA sur les applis de rencontre</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un profil séduisant vous contacte sur une appli de rencontre, la conversation est fluide, attentionnée, presque trop parfaite. Normal : derrière les photos volées, ce n'est peut-être pas une personne qui vous répond, mais un chatbot IA programmé pour vous séduire — puis vous soutirer de l'argent.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Je n'ai jamais ressenti une connexion aussi forte avec quelqu'un... J'ai un souci urgent avec mes papiers pour venir te voir, tu pourrais m'avancer 800 € ? Je te rembourse dès mon arrivée. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque fonctionne si bien</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          L'arnaque sentimentale classique existe depuis longtemps, mais l'IA générative a changé son échelle. Un escroc peut désormais faire tourner des dizaines de conversations en parallèle grâce à un chatbot qui imite le ton, l'humour et les petites attentions d'un vrai prétendant : il se souvient de vos détails, vous écrit tous les jours, s'adapte à vos réponses. Les photos du profil sont volées à une vraie personne (souvent trouvées sur les réseaux sociaux) ou entièrement générées par IA, ce qui les rend impossibles à retrouver par une recherche d'image inversée classique. Le résultat : un lien affectif qui semble authentique, construit sur plusieurs semaines ou mois, avant la demande d'argent.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui doivent alerter</h2>

      {[
        { num:'1', titre:'La relation avance très vite', texte:'Déclarations d\'amour au bout de quelques jours, projets d\'avenir évoqués très tôt. Un vrai lien affectif se construit dans le temps, pas en quelques échanges.' },
        { num:'2', titre:'Il ou elle refuse systématiquement l\'appel vidéo', texte:'Toujours un prétexte : caméra cassée, mauvaise connexion, pudeur. C\'est le moyen le plus simple de démasquer un faux profil ou un chatbot — et c\'est justement ce qu\'il évite.' },
        { num:'3', titre:'Les réponses sont un peu trop parfaites ou décalées', texte:'Un style d\'écriture très soutenu, des réponses instantanées à toute heure, des phrases qui reviennent avec les mêmes tournures, ou des réponses qui ignorent une question précise que vous venez de poser. Ce sont des indices d\'un texte généré par IA.' },
        { num:'4', titre:'La situation empêche toute rencontre réelle', texte:'Le profil vit « à l\'étranger », est militaire en mission, ingénieur sur une plateforme pétrolière ou médecin humanitaire. Toujours un métier ou un contexte qui justifie l\'absence physique.' },
        { num:'5', titre:'Une demande d\'argent finit toujours par arriver', texte:'Frais médicaux urgents, billet d\'avion pour venir vous voir, blocage douanier sur un colis, investissement « garanti » en cryptomonnaie. C\'est le seul but réel de la conversation.' },
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
          <strong>Faites une recherche d'image inversée</strong> sur les photos du profil (via Google Images ou TinEye) : si elles apparaissent sous un autre nom ou sur d'autres sites, c'est une usurpation.<br/><br/>
          <strong>Demandez un appel vidéo spontané</strong>, sans le prévenir à l'avance, ou demandez-lui de faire un geste précis devant la caméra (lever la main, tenir un objet). Un refus répété est un signal fort.<br/><br/>
          <strong>Posez des questions inattendues</strong> sans lien avec la conversation en cours. Un chatbot ou une personne qui gère plusieurs victimes à la fois répond souvent de façon incohérente ou à côté.<br/><br/>
          <strong>Copiez-collez un extrait de son message</strong> dans un moteur de recherche : les chatbots utilisent souvent des formulations types qui reviennent d'une victime à l'autre.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne payez jamais</strong> pour quelqu'un que vous n'avez jamais rencontré en personne<br/>
          <strong>Ne partagez aucune donnée sensible</strong> (pièce d'identité, coordonnées bancaires, photos intimes)<br/>
          <strong>Parlez-en à un proche</strong> avant toute décision financière — un regard extérieur repère souvent l'arnaque immédiatement<br/>
          <strong>Signalez le profil</strong> directement sur l'application de rencontre<br/>
          <strong>Conservez les échanges</strong> comme preuves en cas de signalement
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez déjà envoyé de l'argent</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Cessez immédiatement</strong> tout nouvel envoi, même si on vous promet un remboursement imminent<br/>
          2. <strong>Contactez votre banque</strong> pour signaler la fraude et voir si un virement peut encore être bloqué<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie, avec l'ensemble des échanges et preuves de paiement<br/>
          4. <strong>Signalez les faits</strong> sur cybermalveillance.gouv.fr et via la plateforme Perceval si une carte bancaire a été utilisée<br/>
          5. <strong>Bloquez et signalez le profil</strong> sur l'application pour protéger d'autres utilisateurs
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> Certains réseaux d'escroquerie sentimentale font désormais tourner des dizaines de « relations » simultanément grâce à des chatbots IA, un même opérateur supervisant plusieurs conversations à la fois. La victime pense vivre une histoire unique et exclusive, alors que le même scénario, presque mot pour mot, se joue ailleurs au même moment.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Un message ou une demande d'argent vous semble suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
