import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaque aux faux péages par SMS : +900% de fraudes en 2026 | MessageSûr",
  description: "Un SMS vous réclame le paiement d'un péage impayé avec un lien de paiement ? C'est une arnaque en explosion. Voici comment la reconnaître et quoi faire.",
  openGraph: {
    title: "Arnaque aux faux péages par SMS : +900% de fraudes en 2026",
    description: "Un SMS vous réclame le paiement d'un péage impayé ? C'est une arnaque en explosion. Voici comment la reconnaître.",
    url: 'https://www.messagesur.bzh/blog/faux-peage',
  },
  alternates: { canonical: '/blog/faux-peage' },
}

export default function ArticleFauxPeage() {
  return (
    <main style={{maxWidth:'750px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>8 juin 2026 · Arnaques par SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Arnaque aux faux péages : +900 % de fraudes en 2026</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Un SMS vous informe d'un péage impayé et vous invite à régler une petite somme via un lien. Le message semble officiel, le montant est faible. C'est précisément ce qui rend cette arnaque si efficace — et si dangereuse.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« Sanef : un péage impayé de 2,90 € est enregistré sur votre compte. Régularisez avant le 10/06 pour éviter une majoration : sanef-paiement.fr »</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque fonctionne si bien</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Le montant réclamé est volontairement faible (2 à 5 €) — suffisamment petit pour qu'on ne discute pas et qu'on paye sans réfléchir. Les escrocs misent sur le fait que beaucoup de conducteurs empruntent des autoroutes et peuvent avoir un doute sur un péage oublié. Une fois vos coordonnées bancaires saisies sur le faux site, c'est votre carte entière qui est compromise — pas juste 2,90 €.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes d'un SMS frauduleux</h2>

      {[
        { num:'1', titre:'Le lien ne correspond pas au site officiel', texte:'Les vrais opérateurs de péage ont des sites bien identifiés : sanef.com, vinci-autoroutes.com, aprr.fr, cofiroute.fr. Tout autre domaine (sanef-paiement.fr, peage-regularisation.com…) est frauduleux.' },
        { num:'2', titre:'On vous réclame un paiement par SMS', texte:'Les sociétés de péage n\'envoient jamais de demande de paiement par SMS avec un lien direct. En cas de péage impayé, elles contactent par courrier postal.' },
        { num:'3', titre:'Le délai est très court', texte:'« Régularisez avant 48h pour éviter une majoration » — cette fausse urgence est conçue pour vous empêcher de vérifier.' },
        { num:'4', titre:'Le montant est suspicieusement faible', texte:'2 à 5 € c\'est trop peu pour qu\'on s\'y attarde. C\'est calculé pour que vous payiez sans vous poser de questions.' },
        { num:'5', titre:'Le SMS vient d\'un numéro mobile', texte:'Un 06 ou 07, ou un numéro étranger (souvent +1, +44, +33 suivi de chiffres inhabituels). Les vraies sociétés utilisent des numéros courts professionnels.' },
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
          Si vous pensez avoir réellement un péage impayé, <strong>ne cliquez pas sur le lien du SMS</strong>. Tapez directement l'adresse officielle de l'opérateur dans votre navigateur et connectez-vous à votre espace client. Les principaux opérateurs français :<br/><br/>
          • <strong>Sanef</strong> → sanef.com<br/>
          • <strong>Vinci Autoroutes</strong> → vinci-autoroutes.com<br/>
          • <strong>APRR</strong> → aprr.fr<br/>
          • <strong>Cofiroute</strong> → cofiroute.fr<br/><br/>
          En cas de doute, appelez directement le service client de l'opérateur via le numéro sur leur site officiel.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les bons réflexes</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez pas</strong> sur le lien du SMS<br/>
          <strong>Ne payez rien</strong> sans avoir vérifié sur le site officiel<br/>
          <strong>Transférez le SMS</strong> au 33700 (signalement gratuit)<br/>
          <strong>Signalez-le</strong> sur cybermalveillance.gouv.fr<br/>
          <strong>Bloquez l'expéditeur</strong> et supprimez le message
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Si vous avez payé ou saisi vos données</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          1. <strong>Appelez votre banque immédiatement</strong> pour faire opposition sur votre carte — ne vous limitez pas au montant prélevé, votre numéro de carte est compromis<br/>
          2. <strong>Demandez une nouvelle carte</strong> avec un nouveau numéro<br/>
          3. <strong>Déposez plainte</strong> au commissariat ou à la gendarmerie<br/>
          4. <strong>Signalez la fraude</strong> sur cybermalveillance.gouv.fr<br/>
          5. <strong>Surveillez vos relevés</strong> dans les semaines suivantes
        </p>
      </div>

      <div style={{background:'#FFF3E0',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #FFE0B2'}}>
        <p style={{fontSize:'0.95rem',color:'#E65100',lineHeight:1.7}}>
          <strong>💡 Le saviez-vous ?</strong> Cette arnaque est originaire des États-Unis où elle a explosé en 2024, avant de déferler en Europe. En France, les signalements ont bondi de plus de 900 % en 2026. Les escrocs ciblent aussi bien les particuliers que les professionnels qui utilisent régulièrement l'autoroute.
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
