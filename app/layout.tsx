import type { Metadata } from 'next';

import "../styles/globals.css";

type PagePropsType = {
  children: React.ReactNode
}

export default function RootLayout({ children }: PagePropsType) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Cartesi Project",
  description: "A product validity system for verifying products.",
}