import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Stream Tool",
  description: "Make your stream more fun!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
