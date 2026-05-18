interface Entry {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()
let callCount = 0

// Nettoie les entrées expirées tous les 500 appels pour éviter la fuite mémoire
function cleanup() {
  const now = Date.now()
  store.forEach((entry, key) => {
    if (now > entry.resetAt) store.delete(key)
  })
}

/**
 * Retourne true si la requête est autorisée, false si le quota est dépassé.
 * Note : en-mémoire par instance serverless — protection efficace contre les
 * bursts mais pas contre des attaques distribuées multi-IP.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  if (++callCount % 500 === 0) cleanup()

  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false

  entry.count++
  return true
}

export function getClientIP(req: Request): string {
  const forwarded = (req as any).headers?.get?.('x-forwarded-for') as string | null
  return forwarded?.split(',')[0]?.trim() ?? 'unknown'
}
