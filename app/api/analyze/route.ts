import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `Tu es un assistant de sécurité numérique qui aide à détecter les arnaques par SMS, email, courrier ou document en France.

Analyse le contenu fourni et réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks :
{
  "niveau": "danger" | "attention" | "safe",
  "titre": "titre court en français très simple (max 8 mots)",
  "explication": "explication claire en 2-3 phrases, langage très simple",
  "conseil": "une seule action concrète à faire maintenant, en 1 phrase",
  "signaux": ["signal 1", "signal 2", "signal 3"]
}

Règles :
- "danger" = arnaque quasi-certaine
- "attention" = suspect mais incertain
- "safe" = contenu légitime
- Toujours en français, jamais de jargon technique`

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const message = formData.get('message') as string
    const sender = formData.get('sender') as string
    const file = formData.get('file') as File | null

    if (!message && !file) {
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
            text: `Analyse ce document${sender ? ` reçu de : "${sender}"` : ''}. Est-ce une arnaque ?`
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
            text: `Analyse cette image${sender ? ` reçue de : "${sender}"` : ''}. Est-ce une arnaque ?`
          }
        ]
      }
    } else {
      content = `Analyse ce message reçu${sender ? ` de : "${sender}"` : ''} : "${message}"`
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content }]
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const clean = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Erreur analyse:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
