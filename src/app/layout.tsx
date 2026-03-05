import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'SlapTask — Результат важнее планирования',
  description: 'ИИ-менеджер задач, который «бьет по рукам» ежедневными челленджами. Никаких оправданий. Никакой жалости. Только выполнение.',
  openGraph: {
    title: 'SlapTask — Результат важнее планирования',
    description: 'ИИ-менеджер задач, который «бьет по рукам» ежедневными челленджами. Никаких оправданий. Никакой жалости.',
    images: ['/images/social.png'],
  },
}
export const viewport: Viewport = {
  themeColor: '#0D1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
