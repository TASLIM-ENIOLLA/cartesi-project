import "../styles/globals.css"
import type { Metadata } from "next"

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Veri.fi",
  description: "A project developed by Veri.fi Group",
}