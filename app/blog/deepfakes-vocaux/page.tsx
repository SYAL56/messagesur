import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Deepfakes vocaux : l'arnaque au clonage de voix par IA qui explose en 2026",
  description: "Un appel de votre enfant, en larmes, réclamant un virement urgent ? Sa voix est peut-être clonée par IA à partir de quelques secondes trouvées sur les réseaux sociaux. Voici comment reconnaître cette arnaque et vous en protéger.",
  openGraph: {
    title: "Deepfakes vocaux : l'arnaque au clonage de voix par IA qui explose en 2026",
    description: "Un appel de votre enfant, en larmes, réclamant un virement urgent ? Sa voix est peut-être clonée par IA. Voici comment reconnaître cette arnaque.",
    url: 'https://www.messagesur.bzh/blog/deepfakes-vocaux',
  },
  alternates: { canonical: '/blog/deepfakes-vocaux' },
}

export default function ArticleDeepfakesVocaux() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>11 août 2026 · Arnaques par IA</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Deepfakes vocaux : l'arnaque au clonage de voix qui explose en 2026</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous décrochez, et c'est la voix de votre fils, de votre fille ou d'un proche — paniquée, en larmes, qui vous demande un virement urgent. Cette voix, vous la reconnaîtriez entre mille. Le problème : elle n'est peut-être pas réelle. Une IA suffit désormais à la cloner à partir de quelques secondes d'audio récupérées sur les réseaux sociaux.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Maman, j'ai eu un accident, j'ai besoin d'argent tout de suite, ne le dis à personne, je t'expliquerai après... » — la voix, le ton, les intonations : tout semble authentique.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque fonctionne si bien</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Il y a encore quelques années, cloner une voix demandait des heures d'enregistrement et des compétences techniques pointues. En 2026, des outils d'IA accessibles à tous permettent de reproduire une voix de façon bluffante à partir de 3 à 10 secondes d'audio seulement — une story Instagram, une vidéo TikTok, un message vocal partagé publiquement suffisent. Les escrocs récupèrent cet échantillon, le font passer dans un logiciel de clonage vocal, puis appellent la famille en imitant la voix du proche en direct ou via un message préenregistré. Le choc émotionnel de « reconnaître » la voix d'un enfant en détresse court-circuite le réflexe de vérification : on veut aider avant de réfléchir. C'est exactement ce sur quoi comptent les escrocs, qui ajoutent systématiquement une pression d'urgence et un isolement (« ne le dis à personne ») pour empêcher toute vérification.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui doivent alerter</h2>

      {[
        { num:'1', titre:'Une urgence extrême et un isolement immédiat', texte:'« Ne le dis à personne », « ne raccroche pas », « ne rappelle pas ce numéro ». Ces phrases visent à vous empêcher de vérifier l\'information auprès d\'un tiers ou du proche lui-même par un autre moyen.' },
        { num:'2', titre:'Une demande de virement ou de paiement inhabituel', texte:'Virement bancaire immédiat, achat de cartes cadeaux, envoi via une appli de paiement vers un inconnu. Un vrai proche en détresse passe rarement par ces canaux en premier réflexe.' },
        { num:'3', titre:'Un appel bref, sans échange naturel', texte:'La voix clonée délivre souvent un message court et répète les mêmes formulations si vous posez des questions inattendues, car l\'IA ou la personne derrière n\'a pas de vraie conversation à offrir.' },
        { num:'4', titre:'Un numéro inconnu ou masqué', texte:'L\'appel provient rarement du numéro habituel du proche. Les escrocs utilisent des numéros usurpés ou étrangers, parfois affichés comme masqués.' },
        { num:'5', titre:'Une deuxième personne prend le relais', texte:'Après la voix « du proche », un interlocuteur se présente comme avocat, policier ou médecin pour donner les instructions de paiement — un classique pour rendre l\'histoire crédible et vous maintenir sous pression.' },
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
          <strong>Raccrochez et rappelez vous-même</strong> le proche concerné, sur le numéro que vous avez déjà en contact — jamais celui utilisé pour vous appeler.<br/><br/>
          <strong>Posez une question personnelle</strong> à laquelle un inconnu ou une IA ne peut pas répondre (un souvenir précis, le prénom d'un animal, une anecdote familiale).<br/><br/>
          <strong>Convenez d'un mot de code familial</strong> à l'avance avec vos proches, à utiliser en cas d'urgence réelle par téléphone. C'est aujourd'hui l'une des protections les plus efficaces contre le clonage vocal.<br/><br/>
          <strong>Contactez un autre membre de la famille</strong> pour vérifier si la personne « en détresse » est bien injoignable ou si elle va très bien.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne payez jamais dans l'urgence</strong> pendant l'appel, quelle que soit la pression exercée<br/>
          <strong>Raccrochez et vérifiez</strong> en rappelant le proche sur son vrai numéro<br/>
          <strong>Ne communiquez aucune donnée bancaire</strong> par téléphone<br/>
          <strong>Limitez la visibilité</strong> de vos messages vocaux et vidéos sur les réseaux sociaux, surtout pour les enfants et adolescents<br/>
          <strong>Signalez l'appel</strong> sur cybermalveillance.gouv.fr et au 33700 si un SMS accompagne l'appel
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez déjà envoyé de l'argent</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Contactez votre banque immédiatement</strong> pour tenter de bloquer ou d'annuler le virement<br/>
          2. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie, avec un enregistrement de l'appel si vous en avez un<br/>
          3. <strong>Signalez les faits</strong> sur cybermalveillance.gouv.fr<br/>
          4. <strong>Prévenez vos proches</strong> que leur voix a pu être utilisée, pour qu'ils restent vigilants<br/>
          5. <strong>Surveillez vos comptes</strong> dans les semaines suivantes en cas de tentative de fraude complémentaire
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> C'est l'une des évolutions majeures de l'arnaque en 2026 : les outils de clonage vocal, autrefois réservés à des experts, sont désormais gratuits ou très bon marché et accessibles en quelques clics. Il ne faut plus qu'une poignée de secondes de voix publique — souvent postée sans y penser sur les réseaux sociaux — pour générer un appel convaincant. La vigilance ne suffit plus toujours à l'oreille : un mot de code familial et le réflexe de rappeler restent les meilleures protections.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Un SMS ou un message accompagne un appel suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
