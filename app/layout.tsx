import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'MindDaily',
  keywords: ['Diary', 'Notes'],
  authors: [{ name: 'Vladyslav Okuskov' }, { name: 'Josh Ibbotson' }],
  icons: {
    icon: [
      { url: '/assets/favicon-16x16.png' },
      { url: '/assets/favicon-32x32.png' },
      { url: '/assets/favicon.ico' },
    ],
    shortcut: '/assets/favicon-16x16.png',
    apple: '/assets/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${roboto.variable} ${inter.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
