import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "\"Bonjour, tu as toujours ce numéro ?\" : l'arnaque au faux contact | MessageSûr",
  description: "Un inconnu vous envoie un SMS amical en prétendant vous connaître. C'est le début d'une arnaque très répandue. Voici comment la reconnaître et quoi faire.",
  openGraph: {
    title: "\"Bonjour, tu as toujours ce numéro ?\" : l'arnaque au faux contact",
    description: "Un inconnu vous envoie un SMS amical en prétendant vous connaître. C'est le début d'une arnaque très répandue.",
    url: 'https://www.messagesur.bzh/blog/faux-numero',
  },
  alternates: { canonical: '/blog/faux-numero' },
}

export default function ArticleFauxNumero() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>1 juin 2026 · Arnaques par SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>« Bonjour, tu as toujours ce numéro ? » : l'arnaque au faux contact</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un SMS arrive d'un numéro inconnu : « Bonjour, c'est bien toi ? Tu as toujours ce numéro ? » Le ton est amical, familier. Vous répondez poliment. C'est exactement ce que l'escroc attendait.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Bonjour ! C'est Sophie 😊 Tu as toujours ce numéro ? Ça fait longtemps qu'on ne s'est pas parlé ! »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment fonctionne cette arnaque ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          L'escroc envoie le même SMS à des milliers de numéros au hasard. Ceux qui répondent — même pour dire « vous faites erreur » — sont identifiés comme des numéros actifs et des cibles potentielles. La conversation s'engage alors progressivement : échanges amicaux, puis confidence, puis une demande d'aide financière ou une proposition d'investissement « très rentable ».
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les étapes typiques de l'arnaque</h2>

      {[
        { num:'1', titre:'Le premier contact anodin', texte:'« Bonjour, c\'est bien toi ? » ou « Tu as toujours ce numéro ? » — un message court, amical, qui ne demande rien. Vous répondez par curiosité ou politesse.' },
        { num:'2', titre:'La mise en confiance', texte:'L\'escroc engage une conversation chaleureuse sur plusieurs jours. Il/elle se présente comme une vieille connaissance, un(e) ami(e) d\'enfance ou un contact professionnel. Il connaît parfois votre prénom (récupéré via les réseaux sociaux ou des fuites de données).' },
        { num:'3', titre:'La demande ou la proposition', texte:'Après avoir gagné votre confiance, l\'escroc soit vous demande de l\'argent pour une urgence (accident, problème médical), soit vous propose un investissement miraculeux en crypto ou en bourse avec des rendements impossibles.' },
        { num:'4', titre:'La pression finale', texte:'Si vous hésitez, il insiste avec urgence : « J\'ai vraiment besoin de toi », « C\'est une opportunité unique, ça ne durera pas ». Une fois l\'argent envoyé, plus aucune nouvelle.' },
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
          ⚠️ Le numéro est inconnu mais la personne prétend vous connaître<br/>
          ⚠️ Elle refuse de s'identifier clairement ou de passer un appel vocal<br/>
          ⚠️ La conversation reste uniquement par SMS ou WhatsApp<br/>
          ⚠️ Elle évite les questions précises sur votre passé commun<br/>
          ⚠️ Une demande d'argent ou une proposition d'investissement arrive après quelques jours<br/>
          ⚠️ Les rendements proposés semblent trop beaux pour être vrais
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Le bon réflexe : ne pas répondre</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          La règle d'or : <strong>ne répondez jamais à un SMS d'un numéro inconnu</strong>, même pour dire que c'est une erreur. Répondre confirme que votre numéro est actif et vous expose à d'autres tentatives.<br/><br/>
          Si vous avez un doute sur l'identité de la personne, <strong>appelez directement</strong> la vraie personne que vous pensez reconnaître via son ancien numéro ou via un proche commun.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne répondez pas</strong> aux SMS de numéros inconnus<br/>
          <strong>Ne versez jamais d'argent</strong> à quelqu'un que vous n'avez pas vu en vrai depuis longtemps<br/>
          <strong>Méfiez-vous</strong> de toute proposition d'investissement par SMS<br/>
          <strong>Transférez le SMS</strong> au 33700 (signalement gratuit)<br/>
          <strong>Bloquez le numéro</strong> et supprimez la conversation<br/>
          <strong>Prévenez vos proches</strong> — cette arnaque touche toutes les générations
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez envoyé de l'argent</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Contactez votre banque immédiatement</strong> pour tenter de bloquer le virement<br/>
          2. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          3. <strong>Signalez l'arnaque</strong> sur cybermalveillance.gouv.fr<br/>
          4. <strong>Conservez toutes les preuves</strong> : captures d'écran des échanges, numéro de l'escroc
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> Cette arnaque existe aussi sur WhatsApp et les applis de rencontre. Les escrocs utilisent parfois de vraies photos volées sur les réseaux sociaux pour se rendre crédibles. Si quelqu'un refuse catégoriquement un appel vidéo, c'est un signal d'alarme fort.
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
