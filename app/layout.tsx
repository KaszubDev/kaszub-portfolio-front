import '@styles/globals.css'
import type { Metadata } from 'next'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@components/ThemeProvider'

export const metadata: Metadata = {
  title: 'KaszubDev - Personal portfolio website',
  description: 'Next.js + TailwindCSS + TypeScript + Strapi CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-raleway min-h-screen relative pb-20">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
        <SpeedInsights/>
      </body>
    </html>
  )
}