import Link from 'next/link'

export default function ArticleChronopost() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>24 avril 2026 · Arnaques SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Faux SMS Chronopost : comment reconnaître l'arnaque ?</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous avez reçu un SMS vous demandant de payer des frais de livraison pour recevoir un colis Chronopost ? Avant de cliquer sur quoi que ce soit, lisez ceci.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Votre colis n'a pas pu être livré. Des frais de douane de 2,99€ sont dus. Réglez maintenant : http://chronopost-livraison.fr »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui ne trompent pas</h2>

      {[
        { num:'1', titre:'Vous n\'attendez aucun colis', texte:'Les escrocs envoient ces SMS en masse sans savoir si vous attendez une livraison. Si vous n\'avez rien commandé, méfiez-vous.' },
        { num:'2', titre:'On vous demande une petite somme', texte:'2,99€, 1,50€... Le montant est volontairement petit pour baisser votre garde. Une fois sur le faux site, on vous demandera vos coordonnées bancaires.' },
        { num:'3', titre:'Le lien dans le SMS est bizarre', texte:'Le vrai site de Chronopost est uniquement chronopost.fr. Tout autre domaine comme chronopost-livraison.fr ou chr0nopost.com est frauduleux.' },
        { num:'4', titre:'Le numéro expéditeur est inconnu', texte:'Un numéro étranger ou inhabituel doit vous alerter immédiatement.' },
        { num:'5', titre:'Le message contient des fautes', texte:'Les formulations maladroites et les fautes de français sont souvent le signe d\'un message traduit automatiquement.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Que faire si vous recevez ce SMS ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez sur rien</strong> — même par curiosité.<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>Signalez-le</strong> en transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>En cas de doute</strong> sur une vraie livraison, allez directement sur chronopost.fr.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Vous avez déjà cliqué ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. Ne saisissez aucune information sur le site<br/>
          2. Fermez immédiatement la page<br/>
          3. Si vous avez entré vos coordonnées bancaires, <strong>appelez votre banque</strong> sans attendre<br/>
          4. Signalez l'arnaque sur <strong>cybermalveillance.gouv.fr</strong>
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
