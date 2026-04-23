'use client'

import styles from './about.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <main className={styles.main}>

      <header className={styles.header}>
        <div className={styles.logoMark}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3L4 8v8c0 7.18 5.14 13.9 12 15.5C22.86 29.9 28 23.18 28 16V8L16 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M11 16.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.logoName}>MessageSûr</div>
          <div className={styles.logoTagline}>Protection contre les arnaques numériques</div>
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>À propos de <span className={styles.heroAccent}>MessageSûr</span></h1>
      </section>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Pourquoi ce projet ?</h2>
        <p className={styles.text}>
          Chaque jour, des milliers de personnes reçoivent des SMS et emails frauduleux — faux Chronopost, faux Ameli, faux impôts. Ces arnaques sont de plus en plus sophistiquées et difficiles à détecter, même pour les personnes les plus vigilantes.
        </p>
        <p className={styles.text}>
          J'ai créé MessageSûr pour offrir un outil simple, gratuit et accessible à tous : copiez le message suspect, et obtenez une réponse claire en quelques secondes.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Qui suis-je ?</h2>
        <div className={styles.profile}>
          <div className={styles.avatar}>SA</div>
          <div>
            <p className={styles.name}>Sylvain Albor</p>
            <p className={styles.role}>Créateur de MessageSûr</p>
            <p className={styles.location}>Bretagne, France</p>
          </div>
        </div>
        <p className={styles.text}>
          Auto-entrepreneur basé en Bretagne, j'ai développé MessageSûr pour répondre à un besoin concret que j'observe autour de moi. Mon objectif est de rendre la sécurité numérique accessible à tous, sans jargon technique.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Comment ça fonctionne ?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <p className={styles.stepText}>Vous copiez le SMS ou email suspect</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <p className={styles.stepText}>Vous le collez dans la zone de texte</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <p className={styles.stepText}>Notre IA analyse et vous répond en 3 secondes</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Vos données sont protégées</h2>
        <div className={styles.guarantees}>
          <div className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>🔒</span>
            <p>Vos messages ne sont <strong>jamais stockés</strong> — ils sont analysés puis immédiatement supprimés</p>
          </div>
          <div className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>🇫🇷</span>
            <p>Service hébergé en <strong>Europe</strong>, conforme au RGPD</p>
          </div>
          <div className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>🚫</span>
            <p><strong>Aucune publicité</strong>, aucun tracking, aucune revente de données</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Nous contacter</h2>
        <p className={styles.text}>Une question, une suggestion ou un retour sur le service ? Nous lisons tous les messages.</p>
        <a href="mailto:messagesur.bzh@gmail.com" className={styles.contactBtn}>
          Écrire à Sylvain →
        </a>
      </div>

      <div className={styles.backLink}>
        <Link href="/">← Retour à l'accueil</Link>
      </div>

    </main>
  )
}
