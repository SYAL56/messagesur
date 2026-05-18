import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arnaque au faux colis avec photo générée par IA | MessageSûr",
  description: "Des escrocs envoient des SMS avec une vraie photo de colis à votre nom, générée par intelligence artificielle. Apprenez à reconnaître cette arnaque en forte hausse en 2026.",
  openGraph: {
    title: "Arnaque au faux colis avec photo générée par IA",
    description: "Des escrocs envoient des SMS avec une vraie photo de colis à votre nom, générée par intelligence artificielle. Apprenez à reconnaître cette arnaque.",
    url: "https://www.messagesur.bzh/blog/faux-colis-ia",
    siteName: "MessageSûr",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.messagesur.bzh/blog/faux-colis-ia",
  },
}

export default function ArticleFauxColisIA() {
  return (
    <article className="article-container">
      <div className="article-header">
        <span className="article-category">Arnaque par SMS</span>
        <h1>Arnaque au faux colis avec photo générée par IA</h1>
        <p className="article-intro">
          Vous recevez un SMS avec un message vocal, une photo d&apos;un colis portant votre nom et adresse,
          et un lien pour &laquo;&nbsp;reprogrammer la livraison&nbsp;&raquo;. Tout semble authentique.
          C&apos;est pourtant une arnaque sophistiquée, en forte hausse en 2026.
        </p>
      </div>

      <section>
        <h2>📦 Comment fonctionne cette arnaque ?</h2>
        <p>
          Les escrocs utilisent désormais l&apos;intelligence artificielle pour générer des photos
          réalistes de colis avec votre prénom et votre adresse inscrits sur l&apos;étiquette.
          Le colis semble vrai, la photo est convaincante, et le SMS est personnalisé.
        </p>
        <p>
          Le message arrive souvent accompagné d&apos;un <strong>message vocal automatique</strong> qui
          annonce une &laquo;&nbsp;tentative de livraison échouée&nbsp;&raquo;. Un lien vous invite ensuite
          à payer des &laquo;&nbsp;frais de réexpédition&nbsp;&raquo; ou à saisir vos coordonnées bancaires
          pour confirmer la livraison.
        </p>
      </section>

      <section>
        <h2>🎭 Pourquoi ce message semble vrai</h2>
        <ul>
          <li>
            <strong>Votre nom et adresse sont vrais</strong> — vos données circulent sur internet
            suite à des fuites massives (Free, France Travail, Viamedis…). Des millions de Français
            sont concernés. Les escrocs achètent ces listes et les utilisent pour personnaliser leurs messages.
          </li>
          <li>
            <strong>La photo du colis est réaliste</strong> — grâce à l&apos;IA générative, il suffit
            de quelques secondes pour créer une image d&apos;un colis avec n&apos;importe quel nom dessus.
            Ce n&apos;est pas une preuve que le colis existe.
          </li>
          <li>
            <strong>Le message vocal rassure</strong> — entendre une voix (même synthétique)
            donne un sentiment de légitimité. Les vrais transporteurs n&apos;appellent pourtant jamais
            pour demander un paiement.
          </li>
          <li>
            <strong>Le lien paraît urgent</strong> — &laquo;&nbsp;Votre colis sera retourné dans 48h&nbsp;&raquo;.
            Cette fausse urgence pousse à agir vite, sans réfléchir.
          </li>
        </ul>
      </section>

      <section>
        <h2>🚩 Les signaux d&apos;alerte</h2>
        <ul>
          <li>Le lien ne correspond pas au site officiel d&apos;un transporteur connu (chronopost.fr, laposte.fr, dpd.fr…)</li>
          <li>Le domaine est bizarre : des chiffres, un mot aléatoire, une extension inhabituelle (.pro, .xyz, .top…)</li>
          <li>On vous demande de payer pour recevoir un colis — les vrais transporteurs ne font jamais ça</li>
          <li>Vous n&apos;attendez aucun colis</li>
          <li>Le numéro d&apos;expéditeur est un mobile classique (06 ou 07), pas un numéro court professionnel</li>
        </ul>
      </section>

      <section>
        <h2>🔍 Comment vérifier vous-même</h2>
        <p>
          Si vous attendez vraiment un colis, <strong>ne cliquez pas sur le lien du SMS</strong>.
          Allez directement sur le site officiel du transporteur (tapez-le vous-même dans votre navigateur)
          et entrez votre numéro de suivi. Si vous n&apos;avez pas de numéro de suivi,
          vérifiez dans la confirmation de commande reçue par email.
        </p>
        <p>
          Un transporteur légitime ne vous demandera <strong>jamais de payer par SMS</strong> pour recevoir
          un colis. En cas de doute, appelez directement le service client du transporteur via le numéro
          affiché sur son site officiel.
        </p>
      </section>

      <section>
        <h2>✅ Les bons réflexes</h2>
        <ul>
          <li><strong>Ne cliquez pas</strong> sur le lien — même pour &laquo;&nbsp;voir&nbsp;&raquo;</li>
          <li><strong>Ne payez rien</strong> et ne saisissez aucune donnée bancaire</li>
          <li><strong>Transférez le SMS</strong> au 33700 (signalement gratuit des SMS frauduleux)</li>
          <li><strong>Bloquez l&apos;expéditeur</strong> et supprimez le message</li>
          <li><strong>Prévenez vos proches</strong> — cette arnaque cible tout le monde</li>
        </ul>
      </section>

      <section>
        <h2>Si vous avez cliqué ou payé</h2>
        <p>
          Si vous avez saisi vos coordonnées bancaires, <strong>contactez immédiatement votre banque</strong> pour
          faire opposition. Vous avez le droit d&apos;être remboursé si vous signalez la fraude rapidement.
          Déposez aussi une plainte en ligne sur <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer">cybermalveillance.gouv.fr</a>.
        </p>
      </section>

      <div className="article-footer">
        <p>
          Vous avez reçu un SMS suspect ? <a href="/">Analysez-le gratuitement avec MessageSûr</a> pour
          savoir en quelques secondes s&apos;il s&apos;agit d&apos;une arnaque.
        </p>
      </div>
    </article>
  )
}
