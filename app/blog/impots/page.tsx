import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arnaque aux impôts : faux remboursement et faux PV',
  description: 'Apprenez à repérer les faux emails et SMS des impôts qui promettent un remboursement. Les signes d\'arnaque et que faire.',
  openGraph: {
    title: 'Arnaque aux impôts : faux remboursement et faux PV',
    description: 'Comment reconnaître les faux messages des impôts et se protéger.',
    url: 'https://www.messagesur.bzh/blog/impots',
  },
  alternates: { canonical: '/blog/impots' },
}

export default function ArticleImpots() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>4 mai 2026 · Arnaques SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaque aux impôts par SMS : comment la reconnaître ?</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous avez reçu un SMS vous annonçant un remboursement d'impôt ou une déclaration à finaliser ? C'est très probablement une arnaque.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« DGFIP : Après recalcul de votre dossier fiscal, vous bénéficiez d'un remboursement de 498,87€. Réclamez-le ici : impots-remb-gouv.fr »</p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #90CAF9'}}>
        <p style={{fontSize:'1rem',color:'#0D47A1',fontWeight:500,textAlign:'center'}}>La règle absolue : les impôts ne vous contactent JAMAIS par SMS pour un remboursement ou un paiement.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque est si efficace ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Qui refuserait un remboursement de 498,87€ ? Les escrocs utilisent un montant précis (pas un chiffre rond) pour donner l'impression d'un vrai calcul administratif. Et avec la période de déclaration de revenus au printemps, le timing est parfait pour piéger les contribuables.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les formes les plus courantes</h2>

      {[
        { emoji:'💰', titre:'Le faux remboursement', texte:"On vous annonce un trop-perçu d'impôt et on vous invite à cliquer sur un lien pour recevoir votre argent. En réalité, le remboursement se fait automatiquement sur votre compte bancaire enregistré, jamais via un lien SMS." },
        { emoji:'⚠️', titre:'La fausse mise à jour', texte:"On vous demande de mettre à jour vos informations fiscales sous peine de pénalité. L'administration fiscale ne fait jamais ce type de demande par SMS." },
        { emoji:'📊', titre:'La fausse déclaration crypto', texte:"Depuis 2026, des SMS ciblent les détenteurs de cryptomonnaies en les menaçant d'une majoration de 40% pour des transactions non déclarées. Le lien mène à un faux site copiant impots.gouv.fr." },
      ].map((item, i) => (
        <div key={i} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{fontSize:'1.5rem',flexShrink:0}}>{item.emoji}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui ne trompent pas</h2>

      {[
        { num:'1', titre:"Le message arrive par SMS", texte:"La DGFiP ne contacte jamais les contribuables par SMS pour un remboursement ou un paiement. Jamais." },
        { num:'2', titre:"Le lien ne pointe pas vers impots.gouv.fr", texte:"Le seul site officiel est impots.gouv.fr. Les faux sites utilisent des variantes comme impots-remb-gouv.fr ou impots-gouv-fr.com — ce sont des arnaques." },
        { num:'3', titre:"On vous promet un remboursement avec un montant précis", texte:"498,87€, 218,80€... Un montant non-rond est utilisé pour donner l'illusion d'un vrai calcul. En réalité, tout remboursement réel est versé automatiquement sur votre compte." },
        { num:'4', titre:"On vous demande vos coordonnées bancaires", texte:"L'administration fiscale connait déjà votre RIB. Elle ne vous demandera jamais de le ressaisir par SMS ou email." },
        { num:'5', titre:"L'adresse email ne finit pas par @dgfip.finances.gouv.fr", texte:"Si vous recevez un email des impôts, vérifiez l'adresse de l'expéditeur. Seules les adresses en @dgfip.finances.gouv.fr sont officielles." },
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
          <strong>Signalez le SMS</strong> en le transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>En cas de doute</strong>, connectez-vous directement sur impots.gouv.fr via votre navigateur.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Vous avez cliqué et saisi vos informations ?</h2>
      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid #EF9A9A',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'#7F0000',lineHeight:1.8}}>
          1. <strong>Appelez votre banque immédiatement</strong> pour faire opposition<br/>
          2. <strong>Changez votre mot de passe</strong> sur impots.gouv.fr<br/>
          3. <strong>Surveillez vos comptes</strong> pour repérer les transactions suspectes<br/>
          4. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          5. <strong>Signalez</strong> sur <strong>cybermalveillance.gouv.fr</strong>
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un SMS des impôts suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
