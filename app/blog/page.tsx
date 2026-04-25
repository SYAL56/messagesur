import Link from 'next/link'

const articles = [
  {
    slug: 'chronopost',
    titre: 'Faux SMS Chronopost : comment reconnaître l\'arnaque ?',
    resume: 'Ces messages vous demandent de payer des frais de livraison. Avant de cliquer, découvrez les 5 signes qui ne trompent pas.',
    date: '24 avril 2026',
    emoji: '📦',
  },
  {
    slug: 'ameli',
    titre: 'Faux SMS Ameli : les signes qui ne trompent pas',
    resume: 'L\'Assurance Maladie ne vous contacte jamais par SMS pour vos données personnelles. Voici comment reconnaître ces arnaques.',
    date: '24 avril 2026',
    emoji: '🏥',
  },
  {
    slug: 'clic-suspect',
    titre: 'J\'ai cliqué sur un lien suspect, que faire maintenant ?',
    resume: 'Pas de panique. Tout dépend de ce que vous avez fait ensuite. Voici quoi faire dans les minutes qui suivent.',
    date: '24 avril 2026',
    emoji: '🚨',
  },
]

export default function Blog() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <header style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'3rem'}}>
        <div style={{width:'48px',height:'48px',background:'#1565C0',color:'white',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'26px',height:'26px'}}>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M11 16.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',color:'var(--warm-brown)'}}>MessageSûr</div>
          <div style={{fontSize:'0.72rem',color:'var(--light-brown)',letterSpacing:'0.04em',textTransform:'uppercase'}}>Protection contre les arnaques numériques</div>
        </div>
      </header>

      <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2.2rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Blog</h1>
      <p style={{color:'var(--mid-brown)',fontSize:'0.95rem',marginBottom:'2rem'}}>Guides pratiques pour reconnaître et éviter les arnaques numériques.</p>

      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        {articles.map(article => (
          <Link key={article.slug} href={`/blog/${article.slug}`} style={{textDecoration:'none'}}>
            <div style={{background:'white',borderRadius:'22px',padding:'1.5rem',border:'1px solid var(--cream-dark)',boxShadow:'0 2px 20px rgba(44,24,16,0.06)',transition:'all 0.2s',cursor:'pointer'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:'14px'}}>
                <div style={{fontSize:'2rem',flexShrink:0}}>{article.emoji}</div>
                <div>
                  <p style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'4px'}}>{article.date}</p>
                  <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'0.5rem',lineHeight:1.3}}>{article.titre}</h2>
                  <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{article.resume}</p>
                  <p style={{fontSize:'0.85rem',color:'#1565C0',marginTop:'0.75rem',fontWeight:500}}>Lire l'article →</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{textAlign:'center',marginTop:'2rem'}}>
        <Link href="/" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour à l'accueil</Link>
      </div>
    </main>
  )
}
