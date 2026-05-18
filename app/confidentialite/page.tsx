import Link from 'next/link'
import s from '../legal.module.css'

export default function Confidentialite() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Politique de confidentialité</h1>

      <h2 className={s.h2}>Données traitées</h2>
      <p className={s.p}>Les messages que vous soumettez sont analysés par notre IA puis immédiatement supprimés. Nous ne conservons aucun message sur nos serveurs.</p>

      <h2 className={s.h2}>Cookies</h2>
      <p className={s.p}>Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>

      <h2 className={s.h2}>Hébergement</h2>
      <p className={s.p}>Le site est hébergé par Vercel Inc. Les données sont traitées en Europe conformément au RGPD.</p>

      <h2 className={s.h2}>Vos droits</h2>
      <p className={s.p}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à messagesur.bzh@gmail.com</p>

      <h2 className={s.h2}>Contact</h2>
      <p className={s.p} style={{marginBottom:'2rem'}}>Sylvain Albor — messagesur.bzh@gmail.com</p>

      <Link href="/" className={s.backLink}>← Retour à l'accueil</Link>
    </main>
  )
}
