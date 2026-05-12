import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `Tu es un assistant de sécurité numérique expert en détection d'arnaques en France.

Analyse le contenu fourni (message, image, PDF) et si un expéditeur est fourni (numéro de téléphone ou adresse email), analyse-le aussi en détail.

Pour les NUMÉROS DE TÉLÉPHONE, vérifie :
- Les numéros surtaxés (0899, 0897, 0892...) = très suspect
- Les numéros étrangers inattendus (+232, +375, +371, +44...) = suspect
- Les numéros courts inhabituels (5-6 chiffres) = peut être légitime ou arnaque
- Les numéros commençant par 06/07 envoyant des messages d organismes officiels = suspect
- Les numéros en 09 = souvent VoIP, utilisés par les arnaqueurs

Pour les ADRESSES EMAIL, vérifie :
- Les domaines qui imitent des vrais : ameli-france.com (faux) vs ameli.fr (vrai)
- Les domaines gratuits (gmail, yahoo) utilisés par des organismes officiels = très suspect
- Les caractères trompeurs : 0 au lieu de O, l au lieu de I
- Les sous-domaines trompeurs : ameli.update-info.com (faux)

DOMAINES LEGITIMES CONNUS (ne pas signaler comme frauduleux) :
- my.dpd.fr, dpd.fr = DPD transporteur officiel
- chronopost.fr = Chronopost officiel
- colissimo.fr, laposte.fr = La Poste officiel
- mondialrelay.fr = Mondial Relay officiel
- ups.com, dhl.com, fedex.com = transporteurs internationaux
- gls-group.com = GLS transporteur
- relaiscolis.com = Relais Colis
- tnt.com = TNT transporteur
- geodis.com = Geodis transporteur
- colisprive.fr = Colis Privé transporteur
- ameli.fr = Assurance Maladie officiel
- impots.gouv.fr, amendes.gouv.fr = sites gouvernementaux
- signal.conso.gouv.fr, cybermalveillance.gouv.fr = sites officiels
- caf.fr = Caisse d'Allocations Familiales
- service-public.fr = portail de l'administration française
- pole-emploi.fr, francetravail.fr = France Travail officiel
- securite-sociale.fr = Sécurité sociale officiel
- ants.gouv.fr = Agence nationale des titres sécurisés
- antai.gouv.fr = Agence nationale de traitement automatisé des infractions
- creditagricole.fr = Crédit Agricole banque
- bnpparibas.fr = BNP Paribas banque
- societegenerale.fr = Société Générale banque
- lcl.fr = LCL banque
- banquepopulaire.fr = Banque Populaire
- caisse-epargne.fr = Caisse d'Épargne
- credit-mutuel.fr = Crédit Mutuel banque
- boursorama.com = Boursorama banque en ligne
- fortuneo.fr = Fortuneo banque en ligne
- hellobank.fr = Hello Bank banque en ligne
- orange.fr = Orange opérateur
- sfr.fr = SFR opérateur
- free.fr = Free opérateur
- bouyguestelecom.fr = Bouygues Telecom opérateur
- edf.fr = EDF énergie
- engie.fr = Engie énergie
- totalenergies.fr = TotalEnergies
- amazon.fr = Amazon France
- cdiscount.com = Cdiscount
- fnac.com = Fnac
- leboncoin.fr = Leboncoin
- vinted.fr = Vinted
Les numeros dans les URLs de ces domaines sont des numeros de colis ou de suivi, PAS des numeros de telephone.

Pour les URLS dans les messages :
- Vérifie si le domaine est officiel (.gouv.fr, .ameli.fr, .chronopost.fr...)
- Les raccourcisseurs (bit.ly, tinyurl...) dans des messages officiels = très suspect

Réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks :
{
  "niveau": "danger" | "attention" | "safe",
  "titre": "titre court en français très simple (max 8 mots)",
  "explication": "explication claire en 2-4 phrases, langage très simple. IMPORTANT : si le message est crédible ou sophistiqué, explique précisément POURQUOI c'est quand même une arnaque. Déconstruis chaque élément qui rend le message convaincant (photo, vocal, données personnelles, ton professionnel, urgence) et explique comment les escrocs les fabriquent facilement.",
  "conseil": "une seule action concrète à faire maintenant, en 1 phrase",
  "signaux": ["signal 1", "signal 2", "signal 3"],
  "verification": "Un test simple que l'utilisateur peut faire lui-même pour vérifier. Exemples : 'Vérifiez votre colis directement sur le site officiel du transporteur avec votre numéro de suivi', 'Appelez votre banque au numéro au dos de votre carte', 'Connectez-vous à votre espace Ameli directement depuis ameli.fr'. null si le message est safe.",
  "pourquoi_credible": "Si le message est sophistiqué (contient des données personnelles, photos, vocal, adresse, nom...), explique d'où viennent ces infos : fuites de données massives (France Travail, Viamedis, Free...), bases de données revendues sur internet, ou infos publiques sur les réseaux sociaux. Rassure en disant que des millions de Français sont concernés. null si le message est simple ou safe.",
  "expediteur_analyse": "analyse de expediteur si fourni, sinon null"
}

Règles :
- "danger" = arnaque quasi-certaine
- "attention" = suspect mais incertain
- "safe" = contenu légitime
- Toujours en français, jamais de jargon technique
- Si un numéro ou email est fourni seul sans message, analyse-le quand même`

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const message = formData.get('message') as string
    const sender = formData.get('sender') as string
    const file = formData.get('file') as File | null

    if (!message && !file && !sender) {
      return NextResponse.json({ error: 'Contenu manquant' }, { status: 400 })
    }

    let content: Anthropic.MessageParam['content'] = []

    if (file) {
      const bytes = await file.arrayBuffer()
      const base64 = Buffer.from(bytes).toString('base64')
      const mediaType = file.type as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp' | 'application/pdf'

      if (mediaType === 'application/pdf') {
        content = [
          {
            type: 'document',
            source: { type: 'base64', media_type: 'application/pdf', data: base64 }
          } as any,
          {
            type: 'text',
            text: 'Analyse ce document' + (sender ? ' recu de : "' + sender + '"' : '') + '. Est-ce une arnaque ?'
          }
        ]
      } else {
        content = [
          {
            type: 'image',
            source: { type: 'base64', media_type: mediaType, data: base64 }
          },
          {
            type: 'text',
            text: 'Analyse cette image' + (sender ? ' recue de : "' + sender + '"' : '') + '. Est-ce une arnaque ?'
          }
        ]
      }
    } else if (message) {
      content = 'Analyse ce message recu' + (sender ? ' de l expediteur "' + sender + '"' : '') + ' : "' + message + '"'
    } else if (sender) {
      content = 'Analyse cet expediteur : "' + sender + '". Est-ce un numero ou email fiable ? Donne des informations sur ce numero ou email.'
    }

    // Retry automatique avec délai croissant (max 3 tentatives)
    const MAX_RETRIES = 3
    let lastError: unknown = null

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await client.messages.create({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content }]
        })

        const text = response.content[0].type === 'text' ? response.content[0].text : ''
        const clean = text.replace(/```json/g, '').replace(/```/g, '').trim()
        const result = JSON.parse(clean)

        return NextResponse.json(result)
      } catch (err: unknown) {
        lastError = err
        const status = (err as any)?.status || (err as any)?.error?.status
        const isOverloaded = status === 529 || status === 503 || status === 429

        if (isOverloaded && attempt < MAX_RETRIES) {
          // Attendre avant de réessayer : 2s, 4s
          const delay = Math.pow(2, attempt) * 1000
          await new Promise(resolve => setTimeout(resolve, delay))
          continue
        }

        // Dernière tentative échouée ou erreur non-retryable
        break
      }
    }

    // Toutes les tentatives ont échoué
    console.error('Erreur analyse après ' + MAX_RETRIES + ' tentatives:', lastError)
    const status = (lastError as any)?.status || (lastError as any)?.error?.status
    const isOverloaded = status === 529 || status === 503 || status === 429

    if (isOverloaded) {
      return NextResponse.json(
        { error: 'overloaded', message: 'Désolé, beaucoup de monde utilise le service en ce moment. Réessayez dans un petit moment, ça reviendra vite !' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'unknown', message: "Erreur lors de l'analyse. Veuillez réessayer." },
      { status: 500 }
    )
  } catch (error) {
    console.error('Erreur inattendue:', error)
    return NextResponse.json(
      { error: 'unknown', message: "Erreur lors de l'analyse. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
