import '@/src/styles/globals.css';

import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { inter, roboto } from '@/src/styles/fonts';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning={true}>
      <body
        className={`${roboto.variable} ${inter.variable}`}
        suppressHydrationWarning={true}
      >
        <div className="min-w-[250px]">
          <Toaster position="top-center" />
          {children}
        </div>
      </body>
    </html>
  );
}
