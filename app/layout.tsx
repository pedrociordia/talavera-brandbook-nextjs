import type { Metadata } from 'next'
import { Montserrat, Red_Hat_Text } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
})

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-secondary',
})

export const metadata: Metadata = {
  title: 'Hotel Talavera - Brand Book',
  description: 'Visual Identity & Brand System for Hotel Talavera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${redHatText.variable}`}>
      <body>{children}</body>
    </html>
  )
}
