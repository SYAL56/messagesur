'use client'

import { useState } from 'react'
import styles from './page.module.css'

type Niveau = 'danger' | 'attention' | 'safe'

interface AnalysisResult {
  niveau: Niveau
  titre: string
  explication: string
  conseil: string
  signaux: string[]
}

const EXAMPLES = [
  {
    label: 'Faux Chronopost',
    text: 'Votre colis n\'a pas pu être livré. Des frais de 2,99€ sont dus. Réglez maintenant : https://bit.ly/chr0no-paiement',
  },
  {
    label: 'Faux Ameli',
    text: 'AMELI : Votre carte vitale expire le 30/04. Mettez à jour vos informations : http://ameli-update.fr/validation',
  },
  {
    label: 'Faux impôts',
    text: 'DGFIP : Vous avez un remboursement de 187€ en attente. Cliquez ici pour recevoir votre virement : https://impots-remb.fr',
  },
  {
    label: 'Message normal',
    text: 'Bonjour, c\'est votre médecin Dr Dupont. Je confirme votre rendez-vous de demain mardi à 10h30. À bientôt.',
  },
]

const NIVEAU_CONFIG = {
  danger: {
    icon: '⚠️',
    label: 'Message dangereux',
    className: styles.resultDanger,
    badgeClass: styles.badgeDanger,
    iconClass: styles.iconDanger,
  },
  attention: {
    icon: '🔎',
    label: 'À vérifier',
    className: styles.resultWarning,
    badgeClass: styles.badgeWarning,
    iconClass: styles.iconWarning,
  },
  safe: {
    icon: '✓',
    label: 'Message sûr',
    className: styles.resultSafe,
    badgeClass: styles.badgeSafe,
    iconClass: styles.iconSafe,
  },
}

export default function Home() {
const [sender, setSender] = useState('')  
const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function analyze() {
    if (!message.trim()) return
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, sender }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue')
      setResult(data)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setMessage('')
    setResult(null)
    setError(null)
  }

  const config = result ? NIVEAU_CONFIG[result.niveau] : null

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoMark}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M11 16.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h1 className={styles.logoName}>MessageSûr</h1>
          <p className={styles.logoTagline}>Détectez les arnaques numériques</p>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>
          Ce message est-il<br />
          <span className={styles.heroAccent}>une arnaque ?</span>
        </h2>
        <p className={styles.heroSub}>
          Copiez votre SMS ou email suspect ci-dessous.<br />
          Notre assistant vous répond en quelques secondes.
        </p><a href="/guide" className={styles.guideBtn}>
  Voir le guide d'utilisation →
</a>
      </section>

      {/* Main card */}
      <div className={styles.card}>
        {!result ? (
          <>
            <label className={styles.inputLabel} htmlFor="msg">
<label className={styles.inputLabel} htmlFor="sender">
  Expéditeur (optionnel)
</label>
<input
  id="sender"
  type="text"
  className={styles.senderInput}
  value={sender}
  onChange={e => setSender(e.target.value)}
  placeholder="Ex: 06 12 34 56 78 ou service@chronopost-fr.com"
/>              
Collez votre message ici
            </label>
            <textarea
              id="msg"
              className={styles.textarea}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="« Votre colis n'a pas pu être livré... »"
              rows={5}
              maxLength={2000}
            />

            <div className={styles.examples}>
              <span className={styles.examplesLabel}>Exemples à tester :</span>
              <div className={styles.exampleBtns}>
                {EXAMPLES.map(ex => (
                  <button
                    key={ex.label}
                    className={styles.exampleBtn}
                    onClick={() => setMessage(ex.text)}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              className={styles.analyzeBtn}
              onClick={analyze}
              disabled={loading || !message.trim()}
            >
              {loading ? (
                <span className={styles.loadingContent}>
                  <span className={styles.spinner} />
                  Analyse en cours…
                </span>
              ) : (
                'Analyser ce message →'
              )}
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
                  {result.signaux.map((s, i) => (
                    <li key={i} className={styles.signalItem}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.conseil}>
              <span className={styles.conseilIcon}>→</span>
              <p>{result.conseil}</p>
            </div>

            <button className={styles.resetBtn} onClick={reset}>
              Analyser un autre message
            </button>
          </div>
        )}
      </div>

      {/* Trust badges */}
      <div className={styles.trust}>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>🔒</span>
          <span>Vos messages ne sont pas enregistrés</span>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>🇫🇷</span>
          <span>Service en français, hébergé en Europe</span>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>👨‍👩‍👧</span>
          <span>Partagez à vos proches pour les protéger</span>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2025 MessageSûr — Fait avec soin pour protéger nos aînés</p>
        <p className={styles.footerLinks}>
          <a href="/guide">Guide</a>
          <span>·</span>
          <a href="/about">À propos</a>
          <span>·</span>
          <a href="/confidentialite">Confidentialité</a>
          <span>·</span>
          <a href="/mentions-legales">Mentions légales</a>
          <span>·</span>
          <a href="https://mail.google.com/mail/?view=cm&to=messagesur.bzh@gmail.com">Contact</a>
        </p>
      </footer>
    </main>
  )
}
