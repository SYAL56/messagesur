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

Pour les URLS dans les messages :
- Vérifie si le domaine est officiel (.gouv.fr, .ameli.fr, .chronopost.fr...)
- Les raccourcisseurs (bit.ly, tinyurl...) dans des messages officiels = très suspect

Réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks :
{
  "niveau": "danger" | "attention" | "safe",
  "titre": "titre court en français très simple (max 8 mots)",
  "explication": "explication claire en 2-3 phrases, langage très simple",
  "conseil": "une seule action concrète à faire maintenant, en 1 phrase",
  "signaux": ["signal 1", "signal 2", "signal 3"],
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
  } catch (error) {
    console.error('Erreur analyse:', error)
    return NextResponse.json(
      { error: "Erreur lors de l'analyse. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
