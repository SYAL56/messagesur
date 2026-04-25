import Link from 'next/link'

export default function ArticleClicSuspect() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem',display:'block',marginBottom:'2rem'}}>← Retour au blog</Link>

      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'0.8rem',color:'var(--light-brown)',marginBottom:'8px'}}>24 avril 2026 · Que faire ?</div>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,color:'var(--warm-brown)',lineHeight:1.2,marginBottom:'1rem'}}>J'ai cliqué sur un lien suspect, que faire maintenant ?</h1>
        <p style={{fontSize:'1.05rem',color:'var(--mid-brown)',lineHeight:1.7}}>Pas de panique. Tout dépend de ce que vous avez fait ensuite. Voici quoi faire dans les minutes qui suivent.</p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'14px',padding:'1rem 1.25rem',marginBottom:'2rem',border:'1px solid #90CAF9'}}>
        <p style={{fontSize:'0.95rem',color:'#0D47A1',fontWeight:500}}>D'abord : respirez. Cliquer sur un lien suspect n'est pas forcément catastrophique. Ce qui compte c'est d'agir vite et dans le bon ordre.</p>
      </div>

      {[
        {
          titre: 'Situation 1 — Vous avez cliqué mais n\'avez rien saisi',
          couleur: '#EAF3DE',
          bordure: '#C0DD97',
          textCouleur: '#173404',
          risque: '🟢 Risque faible',
          actions: [
            'Fermez immédiatement la page',
            'Ne revenez pas sur ce lien',
            'Mettez à jour votre téléphone si ce n\'est pas fait',
          ]
        },
        {
          titre: 'Situation 2 — Vous avez saisi votre email ou mot de passe',
          couleur: '#FFF8E6',
          bordure: '#FFB74D',
          textCouleur: '#7A4100',
          risque: '🟠 Risque moyen — agissez dans l\'heure',
          actions: [
            'Changez votre mot de passe sur le vrai site concerné',
            'Changez aussi votre mot de passe email',
            'Activez la double authentification',
            'Vérifiez les connexions suspectes sur vos comptes',
          ]
        },
        {
          titre: 'Situation 3 — Vous avez saisi vos coordonnées bancaires',
          couleur: '#FDECEA',
          bordure: '#EF9A9A',
          textCouleur: '#7F0000',
          risque: '🔴 Risque élevé — chaque minute compte',
          actions: [
            'Appelez votre banque AU NUMÉRO AU DOS DE VOTRE CARTE',
            'Demandez le blocage immédiat de votre carte',
            'Signalez les transactions frauduleuses',
            'Déposez plainte à la police ou gendarmerie',
            'Signalez sur cybermalveillance.gouv.fr',
          ]
        },
      ].map((situation, i) => (
        <div key={i} style={{background:situation.couleur,borderRadius:'14px',padding:'1.25rem',border:`1px solid ${situation.bordure}`,marginBottom:'1rem'}}>
          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem',fontWeight:400,color:situation.textCouleur,marginBottom:'6px'}}>{situation.titre}</h2>
          <p style={{fontSize:'0.85rem',fontWeight:500,color:situation.textCouleur,marginBottom:'0.75rem'}}>{situation.risque}</p>
          <ul style={{paddingLeft:'1.2rem',color:situation.textCouleur}}>
            {situation.actions.map((action, j) => (
              <li key={j} style={{fontSize:'0.9rem',lineHeight:1.8}}>{action}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.3rem',fontWeight:400,color:'var(--warm-brown)',margin:'1.5rem 0 0.75rem'}}>Les numéros utiles</h2>
      <div style={{background:'white',borderRadius:'14px',padding:'1rem 1.25rem',border:'1px solid var(--cream-dark)',marginBottom:'2rem'}}>
        <p style={{fontSize:'0.95rem',color:'var(--mid-brown)',lineHeight:2}}>
          📞 <strong>Votre banque</strong> : numéro au dos de votre carte<br/>
          📱 <strong>Signalement SMS</strong> : transférez au <strong>33700</strong> (gratuit)<br/>
          💻 <strong>Cybermalveillance</strong> : cybermalveillance.gouv.fr<br/>
          🚔 <strong>Police/Gendarmerie</strong> : 17
        </p>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem',textAlign:'center'}}>
        <p style={{color:'#1565C0',fontWeight:500,marginBottom:'1rem'}}>Évitez que ça se reproduise — vérifiez vos messages suspects avant de cliquer</p>
        <a href="/" style={{display:'inline-block',padding:'0.9rem 1.5rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500}}>Analyser un message sur MessageSûr →</a>
      </div>

      <div style={{textAlign:'center'}}>
        <Link href="/blog" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour au blog</Link>
      </div>
    </main>
  )
}
