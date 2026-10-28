import { routing } from '@/i18n/routing'

// A static export has no middleware, so / sends visitors to the default locale with a meta refresh
export default function RootPage() {
  const home = `/${routing.defaultLocale}/`

  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${home}`} />
      </head>
      <body>
        <a href={home}>Ranielli Montagna</a>
      </body>
    </html>
  )
}
