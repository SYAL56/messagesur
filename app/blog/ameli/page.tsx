import Link from 'next/link'

export default function ArticleAmeli() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>24 avril 2026 · Arnaques SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Faux SMS Ameli : les signes qui ne trompent pas</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous avez reçu un SMS de l'Assurance Maladie vous demandant de mettre à jour votre carte vitale ? C'est très probablement une arnaque.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« AMELI : Votre carte vitale expire le 30/04. Mettez à jour vos informations pour continuer à être remboursé : http://ameli-update.fr/validation »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>La règle d'or</h2>
      <div style={{background:'#E3F2FD',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'1.5rem',border:'1px solid #90CAF9'}}>
        <p style={{fontSize:'1rem',color:'#0D47A1',fontWeight:500,textAlign:'center'}}>L'Ameli ne vous contacte jamais par SMS pour vos données personnelles.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui ne trompent pas</h2>

      {[
        { num:'1', titre:'L\'Ameli ne demande jamais vos données par SMS', texte:'Sans exception. Si vous recevez ce type de message, c\'est une arnaque.' },
        { num:'2', titre:'Le lien ne pointe pas vers ameli.fr', texte:'Le vrai site est uniquement ameli.fr. Tout autre domaine comme ameli-update.fr ou ameli-remboursement.fr est frauduleux.' },
        { num:'3', titre:'On crée une urgence artificielle', texte:'"Votre carte vitale expire", "Sous 48h"... Ces formulations sont conçues pour vous faire agir vite sans réfléchir.' },
        { num:'4', titre:'On vous demande vos coordonnées bancaires', texte:'L\'Ameli connaît déjà votre RIB. Elle ne vous demandera jamais de le ressaisir par SMS.' },
        { num:'5', titre:'Votre carte vitale n\'expire pas comme ça', texte:'La carte vitale n\'a pas de date d\'expiration liée à votre santé. Ne vous laissez pas piéger.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Que faire ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez sur rien</strong> et supprimez le message.<br/>
          <strong>Signalez-le</strong> au <strong>33700</strong> (gratuit).<br/>
          <strong>En cas de doute</strong>, connectez-vous directement sur ameli.fr.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Vous avez saisi vos informations ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Appelez votre banque</strong> immédiatement<br/>
          2. <strong>Changez vos mots de passe</strong><br/>
          3. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          4. Signalez sur <strong>cybermalveillance.gouv.fr</strong>
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un SMS Ameli suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
