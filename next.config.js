/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Empêche l'intégration du site dans une iframe (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Empêche le navigateur de deviner le type MIME
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Limite les informations envoyées dans le Referer
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Désactive les fonctionnalités navigateur non utilisées
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js et Vercel Analytics nécessitent unsafe-inline pour les scripts inline
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              // Fonts Google + styles inline (quelques composants en ont encore)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              // blob: pour l'aperçu d'image locale, data: pour le SVG grain du fond
              "img-src 'self' data: blob:",
              // Vercel Analytics
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              // Aucune iframe autorisée (complète X-Frame-Options)
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
