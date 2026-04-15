# MessageSûr 🛡️

**Protection numérique pour les seniors** — Application web pour détecter les arnaques par SMS et email.

---

## Démarrage rapide

### 1. Prérequis
- Node.js 18+ installé
- Un compte [Anthropic](https://console.anthropic.com) (pour la clé API)
- Un compte [Vercel](https://vercel.com) (gratuit, pour le déploiement)

### 2. Installation locale

```bash
# Cloner ou décompresser le projet
cd messagesur

# Installer les dépendances
npm install

# Configurer la clé API
cp .env.example .env.local
# Éditez .env.local et remplacez sk-ant-VOTRE_CLE_ICI par votre vraie clé

# Lancer en développement
npm run dev
# → Ouvrez http://localhost:3000
```

### 3. Obtenir une clé API Anthropic

1. Créez un compte sur [console.anthropic.com](https://console.anthropic.com)
2. Allez dans "API Keys" → "Create Key"
3. Copiez la clé dans votre `.env.local`

---

## Déploiement sur Vercel (5 minutes)

### Option A — Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Ajouter la clé API dans Vercel
vercel env add ANTHROPIC_API_KEY
```

### Option B — Via l'interface web Vercel

1. Poussez le code sur GitHub
2. Allez sur [vercel.com](https://vercel.com) → "New Project"
3. Importez votre repo GitHub
4. Dans "Environment Variables", ajoutez : `ANTHROPIC_API_KEY` = votre clé
5. Cliquez "Deploy"

### Ajouter un nom de domaine

1. Achetez un domaine `.fr` sur [OVH](https://www.ovh.com/fr/domaines/) (~7€/an)
2. Dans Vercel → votre projet → "Domains" → ajoutez votre domaine
3. Suivez les instructions DNS de Vercel

---

## Architecture

```
messagesur/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts      ← API sécurisée (appel Anthropic côté serveur)
│   ├── globals.css           ← Styles globaux
│   ├── layout.tsx            ← Layout principal + métadonnées SEO
│   ├── page.tsx              ← Interface utilisateur principale
│   └── page.module.css       ← Styles de la page
├── .env.example              ← Template de configuration
├── .env.local                ← Votre config (ne pas commiter !)
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## Coûts estimés

| Poste | Coût mensuel |
|---|---|
| Vercel (hébergement) | Gratuit |
| API Anthropic (~10 000 analyses) | ~15-20 € |
| Domaine .fr | ~0,60 € |
| **Total** | **~16-21 €/mois** |

---

## Prochaines évolutions possibles

- [ ] Système de comptes (famille + senior)
- [ ] Historique des analyses par utilisateur
- [ ] Alertes email aux proches
- [ ] Intégration Gmail via OAuth
- [ ] Page d'abonnement (Stripe)
- [ ] Tableau de bord famille

---

## Sécurité & RGPD

- Les messages analysés ne sont **pas stockés** (traitement à la volée)
- La clé API Anthropic est sécurisée côté serveur (jamais exposée au navigateur)
- Hébergement européen recommandé (région `cdg1` sur Vercel = Paris)

Pour activer la région Paris sur Vercel, ajoutez dans `vercel.json` :
```json
{
  "regions": ["cdg1"]
}
```
