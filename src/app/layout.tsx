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
  title: 'SlapTask — Execution Over Planning',
  description: 'AI-powered task manager that slaps you with daily challenges. No excuses. No mercy. Just execution.',
  openGraph: {
    title: 'SlapTask — Execution Over Planning',
    description: 'AI-powered task manager that slaps you with daily challenges. No excuses. No mercy.',
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
