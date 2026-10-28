import { ReactNode } from 'react'
import '@/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { Inter } from 'next/font/google'
import { site } from '@/shared/links'
import { routing } from '@/i18n/routing'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const messages = await getMessages()

  const title = 'Ranielli Montagna'
  const description =
    'Ranielli Montagna é um desenvolvedor de software apaixonado por tecnologia e inovação. Ele é um entusiasta de tecnologias web e mobile, e está sempre em busca de novos desafios.'
  const logo512 = '/icon/icon_512.png'
  const logo192 = '/icon/icon_192.png'

  return (
    <html lang={locale} className={inter.className}>
      <head>
        {/* Title */}
        <title>{title}</title>

        {/* Ícones */}
        <link rel="icon" href={logo512} />
        <link rel="apple-touch-icon" href={logo192} />

        {/* Robots */}
        <meta name="robots" content="all" />

        {/* SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={title} />
        <meta name="copyright" content={`© ${new Date().getFullYear()} Ranielli Montagna`} />
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={logo512} />
        <meta property="og:description" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@rannimontagna" />
        <meta name="twitter:url" content={site} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={logo512} />
        <meta name="twitter:description" content={description} />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="O6z_RtoewTbcN7GDKr5fiw51wEtYjNAlNJyfcZdwFd8"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
