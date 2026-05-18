import { NextResponse } from 'next/server'

export async function GET() {
  const configured = !!process.env.ANTHROPIC_API_KEY

  if (!configured) {
    return NextResponse.json(
      { status: 'degraded', reason: 'API key missing', timestamp: new Date().toISOString() },
      { status: 503 }
    )
  }

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
}
