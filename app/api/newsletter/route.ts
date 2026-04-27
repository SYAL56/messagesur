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
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
      }),
    })

    const data = await res.json().catch(() => null)

    if (res.ok || res.status === 201) {
      return NextResponse.json({ success: true })
    }

    if (data?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, message: 'Déjà inscrit' })
    }

    console.error('Brevo error:', res.status, data)
    return NextResponse.json({ error: 'Erreur inscription' }, { status: 500 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
