import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaques WhatsApp : le faux proche qui a changé de numéro | MessageSûr",
  description: "Un proche vous contacte sur WhatsApp depuis un nouveau numéro et réclame de l'argent en urgence ? C'est une arnaque très répandue. Voici comment la reconnaître et quoi faire.",
  openGraph: {
    title: "Arnaques WhatsApp : le faux proche qui a changé de numéro",
    description: "Un proche vous contacte sur WhatsApp depuis un nouveau numéro et réclame de l'argent en urgence ? C'est une arnaque très répandue.",
    url: 'https://www.messagesur.bzh/blog/arnaques-whatsapp',
  },
  alternates: { canonical: '/blog/arnaques-whatsapp' },
}

export default function ArticleArnaquesWhatsapp() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>29 juin 2026 · Arnaques WhatsApp</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaques WhatsApp : le faux proche qui a changé de numéro</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un message WhatsApp d'un numéro inconnu : « Salut c'est moi, j'ai changé de numéro. J'ai un problème urgent, tu peux m'avancer de l'argent ? » Le message semble venir d'un enfant, d'un parent ou d'un ami. C'est l'une des arnaques les plus émotionnellement manipulatrices du moment — et elle fait beaucoup de victimes.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Bonjour maman, c'est moi. J'ai cassé mon téléphone et j'ai un nouveau numéro. Je suis dans l'urgence, je dois 350 € à quelqu'un d'ici ce soir. Tu peux me virer ? Je te rembourse dès demain. »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque est si efficace</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Les escrocs exploitent deux leviers très puissants : l'<strong>affection</strong> et l'<strong>urgence</strong>. En se faisant passer pour un proche (souvent un enfant adulte ou un parent), ils contournent votre méfiance naturelle. L'urgence — une dette à rembourser ce soir, un médecin à payer, un loyer en retard — vous empêche de prendre le temps de vérifier. WhatsApp est le canal idéal : tout le monde l'utilise, et un nouveau numéro n'éveille pas immédiatement les soupçons quand le prétexte du téléphone cassé est avancé. Les montants demandés varient de 150 à plusieurs milliers d'euros.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes d'un message frauduleux</h2>

      {[
        { num:'1', titre:'Un numéro inconnu qui prétend être un proche', texte:'Le message arrive d\'un numéro que vous n\'avez pas en contact, avec l\'excuse du téléphone cassé ou perdu. Un vrai proche essaiera de vous joindre autrement : e-mail, appel depuis un autre téléphone, via un ami commun.' },
        { num:'2', titre:'Une demande d\'argent dès le premier message', texte:'Un proche en difficulté cherchera d\'abord à vous parler, à expliquer la situation. Les escrocs vont directement à l\'essentiel : « j\'ai besoin d\'argent maintenant ». C\'est un signal d\'alarme majeur.' },
        { num:'3', titre:'Une urgence artificielle et un délai très court', texte:'« C\'est pour ce soir », « si je ne paye pas maintenant je perds mon appartement », « je t\'expliquerai plus tard ». La fausse urgence vous empêche de réfléchir et de vérifier. C\'est intentionnel.' },
        { num:'4', titre:'Le ton et le style ne correspondent pas à votre proche', texte:'Le vrai langage d\'un proche — ses expressions, ses habitudes, son style — est difficile à imiter. Relisez le message : est-ce vraiment sa façon d\'écrire ? Une légère distance ou un style trop formel peut trahir l\'escroc.' },
        { num:'5', titre:'Un virement bancaire ou Lydia/Sumeria demandé', texte:'Les escrocs demandent un virement direct, PayPal, ou des applications comme Lydia ou Sumeria — des moyens quasi impossibles à tracer et à récupérer une fois envoyés. Un proche en difficulté peut attendre que vous l\'appeliez.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment vérifier en 30 secondes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          La vérification est simple et ne prend que quelques secondes : <strong>appelez votre proche sur son ancien numéro</strong>. S'il est injoignable, essayez un autre canal — e-mail, appel à un autre membre de la famille, message sur un réseau social. Si la personne est réellement dans l'urgence, elle comprendra que vous vérifiez. Si l'escroc vous dissuade d'appeler (« mon micro est cassé », « je ne peux pas parler là ») ou vous presse encore plus, c'est une confirmation supplémentaire de la fraude.<br/><br/>
          <strong>Ne vous laissez jamais convaincre de ne pas appeler avant d'envoyer de l'argent.</strong>
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Appelez votre proche</strong> sur son ancien numéro avant tout<br/>
          <strong>Ne virez aucune somme</strong> sans avoir eu confirmation vocale<br/>
          <strong>Signalez le message</strong> dans WhatsApp (trois points → Signaler)<br/>
          <strong>Bloquez le numéro</strong> et supprimez la conversation<br/>
          <strong>Prévenez votre proche</strong> que son identité est usurpée<br/>
          <strong>Signalez la fraude</strong> sur cybermalveillance.gouv.fr
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez déjà envoyé de l'argent</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Contactez immédiatement votre banque</strong> pour tenter de bloquer ou rappeler le virement — les premières heures sont déterminantes<br/>
          2. <strong>Si vous avez utilisé Lydia, PayPal ou Sumeria</strong>, contactez leur support en urgence pour signaler une fraude<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie, ou en ligne sur thesee.interieur.gouv.fr<br/>
          4. <strong>Signalez la fraude</strong> sur cybermalveillance.gouv.fr<br/>
          5. <strong>Prévenez votre entourage</strong> : les escrocs peuvent cibler d'autres membres de votre famille avec la même méthode
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💬 Le saviez-vous ?</strong> Cette arnaque, appelée « fraude au faux enfant » ou « arnaque au changement de numéro », touche particulièrement les personnes de plus de 50 ans. En France, des centaines de milliers d'euros sont détournés chaque mois par ce biais. Les escrocs obtiennent parfois le prénom de vos proches via les réseaux sociaux avant de vous contacter, rendant le message encore plus crédible.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un message suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
