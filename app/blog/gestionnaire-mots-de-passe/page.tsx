import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pourquoi utiliser un gestionnaire de mots de passe en 2026 | MessageSûr",
  description: "Réutiliser le même mot de passe partout vous expose aux arnaques. Voici pourquoi un gestionnaire de mots de passe (Bitwarden) vous protège, et comment bien l'utiliser.",
  openGraph: {
    title: "Pourquoi utiliser un gestionnaire de mots de passe en 2026",
    description: "Réutiliser le même mot de passe partout vous expose aux arnaques. Voici comment un gestionnaire vous protège.",
    url: 'https://www.messagesur.bzh/blog/gestionnaire-mots-de-passe',
  },
  alternates: { canonical: '/blog/gestionnaire-mots-de-passe' },
}

export default function ArticleGestionnaireMotsDePasse() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>22 juin 2026 · Protection des données</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Pourquoi utiliser un gestionnaire de mots de passe (et comment ça vous protège des arnaques)</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous utilisez probablement le même mot de passe, ou une variante, sur plusieurs sites. C'est humain — retenir des dizaines de mots de passe uniques est impossible. Mais c'est exactement ce que les escrocs exploitent. Un gestionnaire de mots de passe règle ce problème en quelques minutes, gratuitement.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi les mots de passe faibles ou réutilisés sont dangereux</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Quand un site que vous utilisez subit une fuite de données, votre email et votre mot de passe se retrouvent dans des bases vendues sur le dark web. Si vous utilisez ce même mot de passe ailleurs, les escrocs n'ont qu'à le tester automatiquement sur des centaines d'autres services — banque, email, réseaux sociaux. C'est ce qu'on appelle le <strong>credential stuffing</strong>, et c'est aujourd'hui l'une des causes principales de comptes piratés.<br/><br/>
          Un mot de passe court ou simple (« azerty123 », votre date de naissance…) peut aussi être deviné en quelques secondes par un logiciel spécialisé. Une fois votre boîte email compromise, l'attaquant peut réinitialiser les mots de passe de tous vos autres comptes — c'est l'effet domino qui transforme une petite faille en catastrophe complète.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 4 étapes pour bien choisir et utiliser un gestionnaire</h2>

      {[
        { num:'1', titre:'Choisissez Bitwarden', texte:'Gratuit, open source et audité indépendamment, Bitwarden est recommandé par de nombreux experts en sécurité. Le code étant public, n\'importe qui peut vérifier qu\'il ne contient pas de faille cachée. Il fonctionne sur ordinateur, mobile et navigateur, avec synchronisation entre tous vos appareils.' },
        { num:'2', titre:'Créez un mot de passe maître unique et solide', texte:'C\'est le seul mot de passe que vous aurez à retenir. Choisissez une phrase longue et facile à mémoriser (« 3chats-mangent-du-fromage-bleu ! »), jamais utilisée ailleurs. Tous vos autres mots de passe seront protégés derrière celui-ci.' },
        { num:'3', titre:'Laissez le gestionnaire générer des mots de passe aléatoires', texte:'Pour chaque nouveau compte, demandez à Bitwarden de générer un mot de passe long et aléatoire (16 caractères ou plus). Vous n\'avez pas besoin de le retenir : le gestionnaire le saisit automatiquement pour vous.' },
        { num:'4', titre:'Changez progressivement vos anciens mots de passe', texte:'Commencez par les comptes les plus sensibles (email, banque, réseaux sociaux), puis remplacez petit à petit tous vos mots de passe réutilisés par des mots de passe uniques générés par Bitwarden.' },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Et la double authentification ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Un mot de passe solide ne suffit pas toujours : il peut quand même fuiter lors d'un piratage du site lui-même, indépendamment de vous. La <strong>double authentification (2FA)</strong> ajoute une seconde barrière : même si votre mot de passe est volé, l'accès reste bloqué sans le code généré par votre téléphone ou une application dédiée.<br/><br/>
          Activez-la en priorité sur votre email (la clé de voûte de tous vos autres comptes), votre banque et vos réseaux sociaux. Privilégiez une application d'authentification (comme celle intégrée à Bitwarden) plutôt que le SMS, qui peut être intercepté via une attaque de type « SIM swap ».
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>🔐 Le saviez-vous ?</strong> Selon les analyses de fuites de données les plus courantes, « 123456 » et « password » figurent encore chaque année parmi les mots de passe les plus utilisés au monde — et peuvent être devinés en moins d'une seconde. Par ailleurs, plus de 60 % des internautes réutilisent le même mot de passe sur plusieurs comptes, ce qui veut dire qu'une seule fuite peut compromettre une grande partie de leur vie numérique.
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous recevez un SMS ou un email vous demandant vos identifiants ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
