import '@styles/globals.css'
import type { Metadata } from 'next'
import Header from '@components/Header'
import Footer from '@components/Footer'

export const metadata: Metadata = {
  title: 'KaszubDev',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-raleway min-h-screen relative pb-20">
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
