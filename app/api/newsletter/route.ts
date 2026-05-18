import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIP } from '../../lib/rateLimit'

const EMAIL_REGEX = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

export async function POST(req: NextRequest) {
  // Rate limiting : 5 inscriptions par heure par IP
  const ip = getClientIP(req)
  if (!checkRateLimit(`newsletter:${ip}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Réessayez dans une heure.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }

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

    if (res.ok || res.status === 201 || data?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    console.error('Brevo error:', res.status, data)
    return NextResponse.json({ error: 'Erreur inscription' }, { status: 500 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
