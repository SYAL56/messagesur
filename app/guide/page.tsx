import Link from 'next/link'

export default function Guide() {
  return (
    <main style={{maxWidth:'600px',margin:'0 auto',padding:'2rem 1.25rem 4rem',fontFamily:'var(--font-sans)'}}>
      <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,marginBottom:'0.5rem',color:'var(--warm-brown)'}}>Comment utiliser MessageSûr sur votre téléphone</h1>
      <p style={{color:'var(--light-brown)',fontSize:'0.9rem',marginBottom:'2rem'}}>Guide pas à pas pour débutants</p>

      <div style={{background:'white',borderRadius:'22px',padding:'1.5rem',border:'1px solid var(--cream-dark)',marginBottom:'1.25rem'}}>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.2rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Étape 1 — Ajouter le site sur votre écran d'accueil</h2>
        <p style={{color:'var(--mid-brown)',fontSize:'0.9rem',marginBottom:'1rem',fontStyle:'italic'}}>Faites cela une seule fois. Ensuite vous aurez une icône comme une application.</p>

        <h3 style={{fontSize:'1rem',fontWeight:500,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Sur iPhone (Apple)</h3>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem',marginBottom:'1rem'}}>
          <li>Ouvrez <strong>Safari</strong> (le navigateur avec la boussole)</li>
          <li>Tapez <strong>messagesur.bzh</strong> dans la barre en haut</li>
          <li>En bas de l'écran, appuyez sur le bouton <strong>Partager</strong> (le carré avec une flèche qui monte ↑)</li>
          <li>Faites défiler la liste vers le bas</li>
          <li>Appuyez sur <strong>"Sur l'écran d'accueil"</strong></li>
          <li>Appuyez sur <strong>"Ajouter"</strong> en haut à droite</li>
          <li>L'icône MessageSûr apparaît sur votre écran d'accueil ✓</li>
        </ol>

        <h3 style={{fontSize:'1rem',fontWeight:500,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Sur Android (Samsung, Huawei...)</h3>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem'}}>
          <li>Ouvrez <strong>Chrome</strong> (le cercle coloré)</li>
          <li>Tapez <strong>messagesur.bzh</strong> dans la barre en haut</li>
          <li>Appuyez sur les <strong>3 petits points</strong> en haut à droite</li>
          <li>Appuyez sur <strong>"Ajouter à l'écran d'accueil"</strong></li>
          <li>Appuyez sur <strong>"Ajouter"</strong></li>
          <li>L'icône MessageSûr apparaît sur votre écran d'accueil ✓</li>
        </ol>
      </div>

      <div style={{background:'white',borderRadius:'22px',padding:'1.5rem',border:'1px solid var(--cream-dark)',marginBottom:'1.25rem'}}>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.2rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'1rem'}}>Étape 2 — Copier un SMS suspect</h2>

        <h3 style={{fontSize:'1rem',fontWeight:500,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Sur iPhone</h3>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem',marginBottom:'1rem'}}>
          <li>Ouvrez votre application <strong>Messages</strong></li>
          <li>Appuyez sur le message suspect</li>
          <li><strong>Appuyez longuement</strong> dessus (gardez le doigt appuyé 2 secondes)</li>
          <li>Un menu apparaît — appuyez sur <strong>"Copier"</strong></li>
          <li>Le message est copié ✓</li>
        </ol>

        <h3 style={{fontSize:'1rem',fontWeight:500,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Sur Android</h3>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem'}}>
          <li>Ouvrez votre application <strong>Messages</strong></li>
          <li><strong>Appuyez longuement</strong> sur le message suspect (2 secondes)</li>
          <li>Le message se surligne en bleu</li>
          <li>Appuyez sur l'icône <strong>Copier</strong> en haut</li>
          <li>Le message est copié ✓</li>
        </ol>
      </div>

      <div style={{background:'white',borderRadius:'22px',padding:'1.5rem',border:'1px solid var(--cream-dark)',marginBottom:'1.25rem'}}>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.2rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'1rem'}}>Étape 3 — Copier un email suspect</h2>

        <h3 style={{fontSize:'1rem',fontWeight:500,color:'var(--warm-brown)',marginBottom:'0.5rem'}}>Sur iPhone et Android</h3>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem'}}>
          <li>Ouvrez votre application <strong>Mail</strong> ou <strong>Gmail</strong></li>
          <li>Ouvrez l'email suspect</li>
          <li><strong>Appuyez longuement</strong> sur le texte de l'email</li>
          <li>Des petites poignées bleues apparaissent</li>
          <li>Faites glisser pour sélectionner tout le texte</li>
          <li>Appuyez sur <strong>"Copier"</strong></li>
          <li>Le texte est copié ✓</li>
        </ol>
      </div>

      <div style={{background:'white',borderRadius:'22px',padding:'1.5rem',border:'1px solid var(--cream-dark)',marginBottom:'1.25rem'}}>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'1.2rem',fontWeight:400,color:'var(--warm-brown)',marginBottom:'1rem'}}>Étape 4 — Analyser le message sur MessageSûr</h2>
        <ol style={{color:'var(--mid-brown)',fontSize:'0.9rem',lineHeight:1.8,paddingLeft:'1.2rem',marginBottom:'1rem'}}>
          <li>Appuyez sur l'icône <strong>MessageSûr</strong> sur votre écran d'accueil</li>
          <li>Appuyez sur la grande zone blanche <strong>"Collez votre message ici"</strong></li>
          <li><strong>Appuyez longuement</strong> dans cette zone (2 secondes)</li>
          <li>Appuyez sur <strong>"Coller"</strong></li>
          <li>Votre message apparaît dans la zone ✓</li>
          <li>Appuyez sur le bouton bleu <strong>"Analyser ce message"</strong></li>
          <li>Attendez 3 secondes</li>
          <li>Lisez le résultat :</li>
        </ol>
        <div style={{display:'flex',flexDirection:'column',gap:'8px',padding:'1rem',background:'var(--cream)',borderRadius:'14px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'0.95rem',color:'#7F0000'}}>🔴 <strong>Rouge</strong> = Danger, ne cliquez sur rien !</div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'0.95rem',color:'#7A4100'}}>🟠 <strong>Orange</strong> = Méfiance, vérifiez avant d'agir</div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'0.95rem',color:'#1B5E20'}}>🟢 <strong>Vert</strong> = Message normal, pas d'inquiétude</div>
        </div>
      </div>

      <div style={{background:'#E3F2FD',borderRadius:'22px',padding:'1.5rem',border:'1px solid #90CAF9',marginBottom:'2rem'}}>
        <h2 style={{fontSize:'1rem',fontWeight:500,color:'#0D47A1',marginBottom:'0.5rem'}}>En cas de doute</h2>
        <p style={{color:'#1565C0',fontSize:'0.9rem',lineHeight:1.7,marginBottom:'0.5rem'}}>Si vous n'êtes pas sûr de savoir faire, demandez à un proche de vous aider la première fois. Une fois que vous avez compris le principe, c'est très rapide !</p>
        <p style={{color:'#1565C0',fontSize:'0.95rem',fontWeight:500}}>L'essentiel à retenir : appui long = copier, appui long = coller.</p>
      </div>

      <div style={{textAlign:'center',marginBottom:'1rem'}}>
        <a href="/" style={{display:'inline-block',padding:'1rem 2rem',background:'#1565C0',color:'white',borderRadius:'14px',textDecoration:'none',fontWeight:500,fontSize:'1rem'}}>Analyser un message maintenant →</a>
      </div>
      <div style={{textAlign:'center'}}>
        <Link href="/" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour à l'accueil</Link>
      </div>
    </main>
  )
}
