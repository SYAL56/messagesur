import type { Metadata } from 'next'
import Link from 'next/link'
import s from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: "Découvrez comment MessageSûr traite vos données : messages supprimés après analyse, cookies techniques uniquement, newsletter et droits RGPD.",
  alternates: { canonical: '/confidentialite' },
}

export default function Confidentialite() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Politique de confidentialité</h1>

      <h2 className={s.h2}>Données traitées</h2>
      <p className={s.p}>Les messages que vous soumettez sont analysés par Anthropic (prestataire tiers, voir la section « Traitement par intelligence artificielle » ci-dessous) avant d'être immédiatement supprimés. Nous ne conservons aucun message sur nos serveurs.</p>

      <h2 className={s.h2}>Traitement par intelligence artificielle</h2>
      <p className={s.p}>Lorsque vous soumettez un SMS pour analyse, le texte est transmis à Anthropic, Inc. (États-Unis) via leur API. Ce traitement est nécessaire au fonctionnement du service. Anthropic agit en tant que sous-traitant au sens du RGPD. Le transfert vers les États-Unis est encadré par les clauses contractuelles types de la Commission européenne. Les données transmises ne sont pas conservées par Anthropic au-delà du traitement immédiat. Pour plus d'informations : <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/privacy</a></p>

      <h2 className={s.h2}>Cookies</h2>
      <p className={s.p}>Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé. Nous utilisons Vercel Analytics, un outil d'analyse d'audience qui ne dépose aucun cookie et ne collecte aucune donnée personnelle identifiable. Les données sont anonymisées et agrégées. Base légale : intérêt légitime.</p>

      <h2 className={s.h2}>Newsletter</h2>
      <p className={s.p}>Si vous vous inscrivez à nos alertes, votre adresse email est transmise à Brevo (Sendinblue SAS, société française, 7 rue de Madrid, 75008 Paris) pour l'envoi des emails. Elle est conservée tant que vous restez inscrit. Vous pouvez vous désinscrire à tout moment via le lien de désinscription présent dans chaque email, ou en nous contactant à messagesur.bzh@gmail.com.</p>

      <h2 className={s.h2}>Hébergement</h2>
      <p className={s.p}>Le site est hébergé par Vercel Inc. Les données sont traitées en Europe conformément au RGPD.</p>

      <h2 className={s.h2}>Vos droits</h2>
      <p className={s.p}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à messagesur.bzh@gmail.com</p>

      <h2 className={s.h2}>Contact</h2>
      <p className={s.p} style={{marginBottom:'2rem'}}>Sylvain ALBOR —messagesur.bzh@gmail.com</p>

      <Link href="/" className={s.backLink}>← Retour à l'accueil</Link>
    </main>
  )
}
