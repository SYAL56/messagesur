import Link from 'next/link'
import s from '../blog/article.module.css'
import g from './guide.module.css'

export default function Guide() {
  return (
    <main className={s.main}>
      <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2rem',fontWeight:400,marginBottom:'0.5rem',color:'var(--warm-brown)'}}>Comment utiliser MessageSûr sur votre téléphone</h1>
      <p className={s.articleMeta} style={{marginBottom:'2rem'}}>Guide pas à pas pour débutants</p>

      <div className={g.card}>
        <h2 className={g.h2}>Étape 1 — Ajouter le site sur votre écran d'accueil</h2>
        <p className={g.subtitle}>Faites cela une seule fois. Ensuite vous aurez une icône comme une application.</p>

        <h3 className={g.h3}>Sur iPhone (Apple)</h3>
        <ol className={g.ol}>
          <li>Ouvrez <strong>Safari</strong> (le navigateur avec la boussole)</li>
          <li>Tapez <strong>messagesur.bzh</strong> dans la barre en haut</li>
          <li>En bas de l'écran, appuyez sur le bouton <strong>Partager</strong> (le carré avec une flèche qui monte ↑)</li>
          <li>Faites défiler la liste vers le bas</li>
          <li>Appuyez sur <strong>"Sur l'écran d'accueil"</strong></li>
          <li>Appuyez sur <strong>"Ajouter"</strong> en haut à droite</li>
          <li>L'icône MessageSûr apparaît sur votre écran d'accueil ✓</li>
        </ol>

        <h3 className={g.h3}>Sur Android (Samsung, Huawei...)</h3>
        <ol className={g.ol} style={{marginBottom:0}}>
          <li>Ouvrez <strong>Chrome</strong> (le cercle coloré)</li>
          <li>Tapez <strong>messagesur.bzh</strong> dans la barre en haut</li>
          <li>Appuyez sur les <strong>3 petits points</strong> en haut à droite</li>
          <li>Appuyez sur <strong>"Ajouter à l'écran d'accueil"</strong></li>
          <li>Appuyez sur <strong>"Ajouter"</strong></li>
          <li>L'icône MessageSûr apparaît sur votre écran d'accueil ✓</li>
        </ol>
      </div>

      <div className={g.card}>
        <h2 className={g.h2}>Étape 2 — Copier un SMS suspect</h2>

        <h3 className={g.h3}>Sur iPhone</h3>
        <ol className={g.ol}>
          <li>Ouvrez votre application <strong>Messages</strong></li>
          <li>Appuyez sur le message suspect</li>
          <li><strong>Appuyez longuement</strong> dessus (gardez le doigt appuyé 2 secondes)</li>
          <li>Un menu apparaît — appuyez sur <strong>"Copier"</strong></li>
          <li>Le message est copié ✓</li>
        </ol>

        <h3 className={g.h3}>Sur Android</h3>
        <ol className={g.ol} style={{marginBottom:0}}>
          <li>Ouvrez votre application <strong>Messages</strong></li>
          <li><strong>Appuyez longuement</strong> sur le message suspect (2 secondes)</li>
          <li>Le message se surligne en bleu</li>
          <li>Appuyez sur l'icône <strong>Copier</strong> en haut</li>
          <li>Le message est copié ✓</li>
        </ol>
      </div>

      <div className={g.card}>
        <h2 className={g.h2}>Étape 3 — Copier un email suspect</h2>

        <h3 className={g.h3}>Sur iPhone et Android</h3>
        <ol className={g.ol} style={{marginBottom:0}}>
          <li>Ouvrez votre application <strong>Mail</strong> ou <strong>Gmail</strong></li>
          <li>Ouvrez l'email suspect</li>
          <li><strong>Appuyez longuement</strong> sur le texte de l'email</li>
          <li>Des petites poignées bleues apparaissent</li>
          <li>Faites glisser pour sélectionner tout le texte</li>
          <li>Appuyez sur <strong>"Copier"</strong></li>
          <li>Le texte est copié ✓</li>
        </ol>
      </div>

      <div className={g.card}>
        <h2 className={g.h2}>Étape 4 — Analyser le message sur MessageSûr</h2>
        <ol className={g.ol}>
          <li>Appuyez sur l'icône <strong>MessageSûr</strong> sur votre écran d'accueil</li>
          <li>Appuyez sur la grande zone blanche <strong>"Collez votre message ici"</strong></li>
          <li><strong>Appuyez longuement</strong> dans cette zone (2 secondes)</li>
          <li>Appuyez sur <strong>"Coller"</strong></li>
          <li>Votre message apparaît dans la zone ✓</li>
          <li>Appuyez sur le bouton bleu <strong>"Analyser ce message"</strong></li>
          <li>Attendez 3 secondes</li>
          <li>Lisez le résultat :</li>
        </ol>
        <div className={g.resultLegend}>
          <div className={g.resultItem} style={{color:'var(--danger-text)'}}>🔴 <strong>Rouge</strong> = Danger, ne cliquez sur rien !</div>
          <div className={g.resultItem} style={{color:'var(--warn-text)'}}>🟠 <strong>Orange</strong> = Méfiance, vérifiez avant d'agir</div>
          <div className={g.resultItem} style={{color:'var(--safe-text)'}}>🟢 <strong>Vert</strong> = Message normal, pas d'inquiétude</div>
        </div>
      </div>

      <div className={g.calloutInfo}>
        <h2>En cas de doute</h2>
        <p>Si vous n'êtes pas sûr de savoir faire, demandez à un proche de vous aider la première fois. Une fois que vous avez compris le principe, c'est très rapide !</p>
        <p>L'essentiel à retenir : appui long = copier, appui long = coller.</p>
      </div>

      <div style={{textAlign:'center',marginBottom:'1rem'}}>
        <a href="/" className={g.ctaBtn}>Analyser un message maintenant →</a>
      </div>
      <div style={{textAlign:'center'}}>
        <Link href="/" style={{color:'var(--light-brown)',textDecoration:'none',fontSize:'0.9rem'}}>← Retour à l'accueil</Link>
      </div>
    </main>
  )
}
