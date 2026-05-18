import Link from 'next/link'
import s from '../legal.module.css'

export default function MentionsLegales() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Mentions légales</h1>

      <h2 className={s.h2}>Éditeur du site</h2>
      <p className={s.p}>Sylvain Albor<br/>Auto-entrepreneur<br/>Bretagne, France<br/>Email : messagesur.bzh@gmail.com</p>

      <h2 className={s.h2}>Hébergement</h2>
      <p className={s.p}>Vercel Inc.<br/>340 Pine Street, Suite 701<br/>San Francisco, CA 94104, USA<br/>Données servies depuis le réseau européen (CDN Paris)</p>

      <h2 className={s.h2}>Propriété intellectuelle</h2>
      <p className={s.p}>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.</p>

      <h2 className={s.h2}>Responsabilité</h2>
      <p className={s.p} style={{marginBottom:'2rem'}}>Les analyses fournies par MessageSûr sont données à titre indicatif. Elles ne constituent pas un avis juridique. L'éditeur ne peut être tenu responsable d'une décision prise sur la base de ces analyses.</p>

      <Link href="/" className={s.backLink}>← Retour à l'accueil</Link>
    </main>
  )
}
