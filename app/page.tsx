'use client'

import { useState } from 'react'
import styles from './page.module.css'
import shared from './shared.module.css'

type Niveau = 'danger' | 'attention' | 'safe'

interface AnalysisResult {
  niveau: Niveau
  titre: string
  explication: string
  conseil: string
  signaux: string[]
  verification?: string | null
  pourquoi_credible?: string | null
}

const EXAMPLES = [
  { label: 'Faux Chronopost', text: "Votre colis n'a pas pu être livré. Des frais de 2,99€ sont dus. Réglez maintenant : https://bit.ly/chr0no-paiement" },
  { label: 'Faux Ameli', text: "AMELI : Votre carte vitale expire le 30/04. Mettez à jour vos informations : http://ameli-update.fr/validation" },
  { label: 'Faux impôts', text: "DGFIP : Vous avez un remboursement de 187€ en attente. Cliquez ici : https://impots-remb.fr" },
  { label: 'Appel suspect', text: "J'ai reçu un appel du 0899 23 45 67, pas de message vocal. Est-ce une arnaque ?" },
  { label: 'Message normal', text: "Bonjour, c'est votre médecin Dr Dupont. Je confirme votre rendez-vous de demain mardi à 10h30. À bientôt." },
]

const NIVEAU_CONFIG = {
  danger: { icon: '⚠️', label: 'Message dangereux', className: styles.resultDanger, badgeClass: styles.badgeDanger, iconClass: styles.iconDanger },
  attention: { icon: '🔎', label: 'À vérifier', className: styles.resultWarning, badgeClass: styles.badgeWarning, iconClass: styles.iconWarning },
  safe: { icon: '✓', label: 'Message sûr', className: styles.resultSafe, badgeClass: styles.badgeSafe, iconClass: styles.iconSafe },
}

export default function Home() {
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function analyze() {
    if (!message.trim() && !file && !sender.trim()) return
    setLoading(true)
    setResult(null)
    setError(null)

    const formData = new FormData()
    if (message) formData.append('message', message)
    if (sender) formData.append('sender', sender)
    if (file) formData.append('file', file)

    const MAX_CLIENT_RETRIES = 2
    for (let attempt = 0; attempt <= MAX_CLIENT_RETRIES; attempt++) {
      try {
        const res = await fetch('/api/analyze', { method: 'POST', body: formData })
        const data = await res.json()

        if (res.status === 503 && attempt < MAX_CLIENT_RETRIES) {
          const wait = (attempt + 1) * 5
          setError('⏳ Beaucoup de monde utilise le service. Nouvelle tentative dans ' + wait + 's, patientez...')
          await new Promise(resolve => setTimeout(resolve, wait * 1000))
          setError(null)
          continue
        }

        if (!res.ok) throw new Error(data.message || data.error || 'Erreur inconnue')
        setResult(data)
        setError(null)
        setLoading(false)
        return
      } catch (e: unknown) {
        if (attempt === MAX_CLIENT_RETRIES) {
          setError(e instanceof Error ? e.message : 'Une erreur est survenue. Veuillez réessayer.')
        }
      }
    }
    setLoading(false)
  }

  function reset() {
    setMessage(''); setSender(''); setFile(null); setPreview(null); setResult(null); setError(null)
  }

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.querySelector('input') as HTMLInputElement
    if (!input.value) return
    setNlStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: input.value }),
      })
      if (res.ok) {
        setNlStatus('success')
        input.value = ''
      } else {
        setNlStatus('error')
      }
    } catch {
      setNlStatus('error')
    }
  }

  const config = result ? NIVEAU_CONFIG[result.niveau] : null

  return (
    <main className={styles.main}>
      <header className={shared.header}>
        <div className={shared.logoMark}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M11 16.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{flex:1}}>
          <h1 className={shared.logoName}>MessageSûr</h1>
          <p className={shared.logoTagline}>Protection contre les arnaques numériques</p>
        </div>
      </header>

      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>Est-ce <span className={styles.heroAccent}>une arnaque ?</span></h2>
        <p className={styles.heroSub}>Copiez votre SMS, email ou chargez une image/PDF suspect.<br />Notre assistant vous répond en quelques secondes.</p>
        <a href="/guide" className={styles.guideBtn}>Comment utiliser MessageSûr →</a>
        <br />
        <a href="/blog" className={styles.guideBtn}>📚 Reconnaître les arnaques →</a>
      </section>

      <div className={styles.card}>
        {!result ? (
          <>
            <label className={styles.inputLabel} htmlFor="sender">Expéditeur (optionnel)</label>
            <input id="sender" type="text" className={styles.senderInput} value={sender} onChange={e => setSender(e.target.value)} placeholder="Ex: 06 12 34 56 78 ou service@chronopost-fr.com" />
            <label className={styles.inputLabel} htmlFor="msg">Collez votre message ici</label>
            <textarea id="msg" className={styles.textarea} value={message} onChange={e => setMessage(e.target.value)} placeholder="« Votre colis n'a pas pu être livré... »
ou laissez vide pour tester un numéro ou une adresse email" rows={5} maxLength={2000} />
            <div className={styles.uploadZone}>
              <label htmlFor="fileUpload" className={styles.uploadLabel}>
                📎 Ou charger une image / PDF
                <input id="fileUpload" type="file" accept="image/jpeg,image/png,application/pdf" style={{display:'none'}} onChange={e => { const f = e.target.files?.[0] || null; setFile(f); if (f && f.type.startsWith('image/')) { setPreview(URL.createObjectURL(f)) } else { setPreview(null) } }} />
              </label>
              {file && (
                <div className={styles.fileInfo}>
                  {preview && <img src={preview} alt="aperçu" className={styles.previewImg} />}
                  <span>{file.name}</span>
                  <button onClick={() => { setFile(null); setPreview(null) }} aria-label="Supprimer le fichier">✕</button>
                </div>
              )}
            </div>
            <div className={styles.examples}>
              <span className={styles.examplesLabel}>Pas de message sous la main ? Essayez un exemple :</span>
              <div className={styles.exampleBtns}>
                {EXAMPLES.map(ex => (
                  <button key={ex.label} className={styles.exampleBtn} onClick={() => setMessage(ex.text)}>{ex.label}</button>
                ))}
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.analyzeBtn} onClick={analyze} disabled={loading || (!message.trim() && !file && !sender.trim())}>
              {loading ? <span className={styles.loadingContent}><span className={styles.spinner} />Analyse en cours…</span> : 'Analyser ce message →'}
            </button>
          </>
        ) : (
          <div className={`${styles.result} ${config!.className}`}>
            <div className={styles.resultHeader}>
              <div className={`${styles.resultIconWrap} ${config!.iconClass}`}>
                <span className={styles.resultIconEmoji}>{config!.icon}</span>
              </div>
              <div>
                <span className={`${styles.badge} ${config!.badgeClass}`}>{config!.label}</span>
                <h3 className={styles.resultTitle}>{result.titre}</h3>
              </div>
            </div>
            <p className={styles.resultExplication}>{result.explication}</p>
            {result.signaux && result.signaux.length > 0 && (
              <div className={styles.signaux}>
                <p className={styles.signauxTitle}>Indices repérés :</p>
                <ul className={styles.signauxList}>
                  {result.signaux.map((s, i) => <li key={i} className={styles.signalItem}>{s}</li>)}
                </ul>
              </div>
            )}
            <div className={styles.conseil}>
              <span className={styles.conseilIcon}>→</span>
              <p>{result.conseil}</p>
            </div>
            {result.verification && (
              <div className={styles.verification}>
                <span className={styles.verificationIcon}>🔍</span>
                <div>
                  <p className={styles.verificationTitle}>Comment vérifier vous-même :</p>
                  <p>{result.verification}</p>
                </div>
              </div>
            )}
            {result.pourquoi_credible && (
              <div className={styles.pourquoiCredible}>
                <span className={styles.pourquoiCredibleIcon}>💡</span>
                <div>
                  <p className={styles.pourquoiCredibleTitle}>Pourquoi ce message semble vrai :</p>
                  <p>{result.pourquoi_credible}</p>
                </div>
              </div>
            )}
            { result.niveau === 'danger' && (
              <div className={styles.signalement}>
                <p className={styles.signauxTitle}>Signaler cette arnaque :</p>
                <div className={styles.signalementLinks}>
                  <a href="https://www.33700.fr/" target="_blank" rel="noopener noreferrer" className={styles.signalementLink}>SMS → Signaler au 33700</a>
                  <a href="https://www.signal-spam.fr/" target="_blank" rel="noopener noreferrer" className={styles.signalementLink}>Email → Signal Spam</a>
                  <a href="https://phishing-initiative.eu/contrib/" target="_blank" rel="noopener noreferrer" className={styles.signalementLink}>Site web → Phishing Initiative</a>
                </div>
              </div>
            )}
            <button className={styles.resetBtn} onClick={reset}>Analyser un autre message</button>
          </div>
        )}
      </div>

      <div className={styles.trust}>
        <div className={styles.trustItem}><span className={styles.trustIcon}>🔒</span><span>Vos messages ne sont pas enregistrés</span></div>
        <div className={styles.trustItem}><span className={styles.trustIcon}>🇫🇷</span><span>Service en français, données non conservées</span></div>
        </div>

      <div className={styles.shareBox}>
        <p className={styles.shareTitle}>Partagez cette application</p>
        <div className={styles.shareButtons}>
          <a href="sms:?body=Un site utile pour vérifier les SMS et emails suspects : https://www.messagesur.bzh" className={styles.shareBtn}>📱 SMS</a>
          <a href="mailto:?subject=Un site utile contre les arnaques&body=Bonjour, je te recommande ce site pour vérifier les SMS et emails suspects : https://www.messagesur.bzh" className={styles.shareBtn}>📧 Email</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.messagesur.bzh" target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>📘 Facebook</a>
          <a href="https://api.whatsapp.com/send?text=Un site utile pour vérifier les SMS et emails suspects : https://www.messagesur.bzh" target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>💬 WhatsApp</a>
        </div>
      </div>

      <div className={styles.partners}>
        <p className={styles.partnersTitle}>Plateformes officielles de signalement</p>
        <div className={styles.partnersGrid}>
          <a href="https://www.33700.fr" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
            <span className={styles.partnerIcon}>📱</span>
            <span>33700.fr</span>
          </a>
          <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
            <span className={styles.partnerIcon}>🛡️</span>
            <span>Cybermalveillance</span>
          </a>
          <a href="https://phishing-initiative.eu" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
            <span className={styles.partnerIcon}>🔗</span>
            <span>Phishing Initiative</span>
          </a>
        </div>
      </div>

      <div className={styles.newsletter}>
        <p className={styles.newsletterTitle}>🔔 Recevez nos alertes arnaques</p>
        <p className={styles.newsletterDesc}>Chaque semaine, nos conseils pour vous protéger. Gratuit, sans spam.</p>
        <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
          <input type="email" placeholder="Votre adresse email" required className={styles.newsletterInput} />
          <button type="submit" className={styles.newsletterBtn} disabled={nlStatus === 'loading'}>
            {nlStatus === 'loading' ? '...' : "S'inscrire"}
          </button>
        </form>
        <p className={styles.newsletterMsg}>
          {nlStatus === 'success' && '✅ Inscrit ! Vous recevrez nos prochaines alertes.'}
          {nlStatus === 'error' && '❌ Erreur, veuillez réessayer.'}
        </p>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 MessageSûr — Fait avec soin pour vous protéger</p>
        <p className={styles.footerLinks}>
          <a href="/about">À propos</a><span aria-hidden="true">·</span>
          <a href="/confidentialite">Confidentialité</a><span aria-hidden="true">·</span>
          <a href="/mentions-legales">Mentions légales</a><span aria-hidden="true">·</span>
          <a href="https://mail.google.com/mail/?view=cm&to=messagesur.bzh@gmail.com">Contact</a>
        </p>
      </footer>
    </main>
  )
}
