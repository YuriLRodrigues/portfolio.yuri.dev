import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { ThemeProvider } from '@/providers/theme.provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  generator: 'Next.js',
  title: 'Yuri Leite Rodrigues | Desenvolvedor Fullstack',
  description: 'Portfólio de Yuri Leite Rodrigues, desenvolvedor fullstack especializado em React, Next.js e Node.js.',
  applicationName: 'Yuri Leite Rodrigues - Portfólio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Desenvolvedor Fullstack',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Frontend',
    'Backend',
    'Portfólio',
    'Web Development',
    'Clean Architecture',
    'Programação',
    'Dev Fullstack',
  ],
  authors: [{ name: 'Yuri Leite Rodrigues', url: 'https://yurilrodrigues.vercel.app/' }],
  creator: 'Yuri Leite Rodrigues',
  publisher: 'Yuri Leite Rodrigues',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Yuri Leite Rodrigues | Desenvolvedor Fullstack',
    description:
      'Explore projetos de alto nível em React, Next.js e Node.js com arquitetura limpa e melhores práticas.',
    url: 'https://yurilrodrigues.vercel.app/',
    siteName: 'Yuri Leite Rodrigues - Portfólio',
    type: 'website',
    images: [
      {
        url: 'https://yurilrodrigues.vercel.app/yr-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfólio de Yuri Leite Rodrigues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seuTwitter',
    creator: '@seuTwitter',
    title: 'Yuri Leite Rodrigues | Desenvolvedor Fullstack',
    description: 'Portfólio de Yuri Leite Rodrigues, com projetos em React, Next.js e Node.js.',
    images: ['https://yurilrodrigues.vercel.app/yr-logo.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://yurilrodrigues.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
