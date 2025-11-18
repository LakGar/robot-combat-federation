import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RCF - Robot Combat Federation | The Future of Robot Combat',
  description: 'Where engineering meets domination. Join the premier robot combat league.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-rcf-black text-white antialiased">{children}</body>
    </html>
  )
}

