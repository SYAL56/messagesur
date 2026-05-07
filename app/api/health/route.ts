import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function GET() {
  const start = Date.now()

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 10,
      messages: [{ role: 'user', content: 'Réponds juste "ok".' }]
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const latency = Date.now() - start

    return NextResponse.json({
      status: 'ok',
      api: 'ok',
      latency_ms: latency,
      timestamp: new Date().toISOString()
    })
  } catch (error: unknown) {
    const latency = Date.now() - start
    const status = (error as any)?.status || 'unknown'

    return NextResponse.json({
      status: 'degraded',
      api: 'error',
      api_error: status,
      latency_ms: latency,
      timestamp: new Date().toISOString()
    }, { status: 503 })
  }
}
