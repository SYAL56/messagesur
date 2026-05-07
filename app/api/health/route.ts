import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function GET() {
  const start = Date.now()

  try {
    // Timeout de 8 secondes pour éviter les faux positifs UptimeRobot
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1,
      messages: [{ role: 'user', content: 'ok' }]
    }, { signal: controller.signal })

    clearTimeout(timeout)
    const latency = Date.now() - start

    return NextResponse.json({
      status: 'ok',
      api: 'ok',
      latency_ms: latency,
      timestamp: new Date().toISOString()
    })
  } catch (error: unknown) {
    const latency = Date.now() - start
    const isTimeout = (error as any)?.name === 'AbortError'
    const status = isTimeout ? 'timeout' : ((error as any)?.status || 'unknown')

    return NextResponse.json({
      status: 'degraded',
      api: 'error',
      api_error: status,
      latency_ms: latency,
      timestamp: new Date().toISOString()
    }, { status: 503 })
  }
}
