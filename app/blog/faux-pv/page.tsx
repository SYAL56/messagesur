import Link from 'next/link'

export default function ArticleFauxPV() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>27 avril 2026 · Arnaques SMS</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>Faux SMS d'amende : l'arnaque au PV qui explose en 2026</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Vous avez reçu un SMS vous demandant de payer une contravention ? C'est une arnaque. Voici comment la reconnaître et quoi faire.</p>
      </div>

      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #EF9A9A'}}>
        <p style={{fontSize:'0.9rem',color:'#7F0000',fontStyle:'italic'}}>« INFO AMENDES : Votre PV n°2026-AF-4892 n'a pas été réglé. Passez au paiement pour éviter la majoration : pv-amendes-france.com/payer »</p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #90CAF9'}}>
        <p style={{fontSize:'1rem',color:'#0D47A1',fontWeight:500,textAlign:'center'}}>La règle absolue : l'ANTAI n'envoie JAMAIS de SMS pour payer une amende.</p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Pourquoi cette arnaque marche si bien ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          Tout le monde a peur de recevoir une amende. Les escrocs jouent sur cette angoisse en créant un sentiment d'urgence — « payez maintenant pour éviter la majoration ». Le montant est souvent petit (17€, 35€) pour vous pousser à payer sans réfléchir.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Comment distinguer le vrai du faux ?</h2>

      <div style={{background:'white',borderRadius:'14px',padding:'1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem',overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
          <thead>
            <tr style={{borderBottom:'2px solid var(--cream-dark)'}}>
              <th style={{textAlign:'left',padding:'8px',color:'var(--warm-brown)'}}>Critère</th>
              <th style={{textAlign:'left',padding:'8px',color:'#1B5E20'}}>Vrai avis</th>
              <th style={{textAlign:'left',padding:'8px',color:'#7F0000'}}>Faux SMS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid var(--cream-dark)'}}>
              <td style={{padding:'8px',fontWeight:500,color:'var(--mid-brown)'}}>Canal</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>Courrier postal</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>SMS ou email</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--cream-dark)'}}>
              <td style={{padding:'8px',fontWeight:500,color:'var(--mid-brown)'}}>Paiement</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>amendes.gouv.fr uniquement</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>Lien suspect</td>
            </tr>
            <tr style={{borderBottom:'1px solid var(--cream-dark)'}}>
              <td style={{padding:'8px',fontWeight:500,color:'var(--mid-brown)'}}>Expéditeur</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>Courrier officiel ANTAI</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>Numéro mobile inconnu</td>
            </tr>
            <tr>
              <td style={{padding:'8px',fontWeight:500,color:'var(--mid-brown)'}}>Urgence</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>Délai de 45 jours</td>
              <td style={{padding:'8px',color:'var(--mid-brown)'}}>« Payez immédiatement »</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les 5 signes qui ne trompent pas</h2>

      {[
        { num:'1', titre:"Le message arrive par SMS", texte:"L'ANTAI ne contacte jamais par SMS ni par email. Les vrais avis de contravention arrivent uniquement par courrier postal." },
        { num:'2', titre:"Le lien ne pointe pas vers amendes.gouv.fr", texte:"Le seul site officiel pour payer une amende est amendes.gouv.fr. Tout autre lien comme pv-amendes-france.com ou antai-paiement.fr est frauduleux." },
        { num:'3', titre:"On vous menace d'une majoration immédiate", texte:"En réalité, vous avez toujours 45 jours pour payer une amende forfaitaire. Aucune majoration ne tombe en quelques heures." },
        { num:'4', titre:"Le numéro expéditeur est un mobile", texte:"Un vrai organisme officiel n'envoie pas de SMS depuis un 06 ou 07. Si le numéro ressemble à un numéro de particulier, c'est une arnaque." },
        { num:'5', titre:"On vous demande vos coordonnées bancaires", texte:"Le faux site vous demande votre numéro de carte pour « payer l'amende ». En réalité, les escrocs récupèrent vos données pour vider votre compte." },
      ].map(item => (
        <div key={item.num} style={{display:'flex',gap:'14px',marginBottom:'1rem',background:'white',borderRadius:'14px',padding:'1rem',border:'1px solid var(--cream-dark)'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1565C0',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,flexShrink:0}}>{item.num}</div>
          <div>
            <p style={{fontWeight:500,color:'var(--warm-brown)',marginBottom:'4px'}}>{item.titre}</p>
            <p style={{fontSize:'0.9rem',color:'var(--mid-brown)',lineHeight:1.6}}>{item.texte}</p>
          </div>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>L'arnaque existe aussi en version papier !</h2>
      <div style={{background:'#FFF8E6',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid #FFB74D',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'#7A4100',lineHeight:1.8}}>
          Attention — des faux avis de contravention circulent aussi par courrier et sur les pare-brises. Ils ressemblent parfaitement à des documents officiels avec un faux numéro de dossier, un faux commissaire de justice et un IBAN personnel pour le paiement. En cas de doute, vérifiez toujours sur <strong>amendes.gouv.fr</strong> directement.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Que faire si vous recevez ce SMS ?</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'1.5rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:1.8}}>
          <strong>Ne cliquez sur rien</strong> — même par curiosité.<br/>
          <strong>Signalez le SMS</strong> en le transférant au <strong>33700</strong> (gratuit).<br/>
          <strong>Supprimez le message</strong> immédiatement.<br/>
          <strong>En cas de doute</strong> sur une vraie amende, allez directement sur amendes.gouv.fr.
        </p>
      </div>

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Vous avez déjà cliqué et saisi vos informations ?</h2>
      <div style={{background:'#FDECEA',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid #EF9A9A',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'#7F0000',lineHeight:1.8}}>
          1. <strong>Appelez votre banque immédiatement</strong> — demandez le blocage de votre carte<br/>
          2. <strong>Faites opposition</strong> sur les paiements suspects<br/>
          3. <strong>Déposez plainte</strong> à la police ou gendarmerie<br/>
          4. <strong>Signalez</strong> sur <strong>cybermalveillance.gouv.fr</strong><br/>
          5. <strong>Changez vos mots de passe</strong> si vous avez saisi des identifiants
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Vous avez reçu un SMS d'amende suspect ?</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analysez-le gratuitement sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
