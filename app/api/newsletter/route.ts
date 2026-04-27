import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email manquant' }, { status: 400 })

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
      }),
    })

    if (res.ok || res.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await res.json()
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, message: 'Déjà inscrit' })
    }

    return NextResponse.json({ error: 'Erreur inscription' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
