import Link from 'next/link'

export default function Confidentialite() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,marginBottom:'2rem',color:'var(--warm-brown)'}}>Politique de confidentialité</h1>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Données traitées</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Les messages que vous soumettez sont analysés par notre IA puis immédiatement supprimés. Nous ne conservons aucun message sur nos serveurs.</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Cookies</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Hébergement</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Le site est hébergé par Vercel Inc. Les données sont traitées en Europe conformément au RGPD.</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Vos droits</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'1rem'}}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à messagesur.bzh@gmail.com</p>
      <h2 style={{fontSize:'1.1rem',fontWeight:500,margin:'1.5rem 0 0.5rem'}}>Contact</h2>
      <p style={{color:'var(--mid-brown)',lineHeight:1.7,marginBottom:'2rem'}}>Sylvain Albor — messagesur.bzh@gmail.com</p>
      <Link href="/" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour à l'accueil</Link>
    </main>
  )
}
