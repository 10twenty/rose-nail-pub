import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import { content } from '../config/content'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: `${content.companyName} - ${content.hero.description}`,
  description: content.about.description,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon.svg',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
} 