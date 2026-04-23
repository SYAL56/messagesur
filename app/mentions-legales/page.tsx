import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,marginBottom:'2rem',color:'var(--warm-brown)'}}>Mentions légales</h1>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Éditeur du site</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Sylvain Albor<br/>Auto-entrepreneur<br/>Bretagne, France<br/>Email : messagesur.bzh@gmail.com</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Hébergement</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Vercel Inc.<br/>340 Pine Street, Suite 701<br/>San Francisco, CA 94104, USA</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Propriété intellectuelle</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Responsabilité</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'2rem'}}>Les analyses fournies par MessageSûr sont données à titre indicatif. Elles ne constituent pas un avis juridique. L'éditeur ne peut être tenu responsable d'une décision prise sur la base de ces analyses.</p>
      <Link href="/" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour à l'accueil</Link>
    </main>
  )
}
