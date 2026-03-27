import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aadi Shakti Nirman Sewa Pvt. Ltd. | Construction Excellence in Nepal',
  description:
    'Aadi Shakti Nirman Sewa Pvt. Ltd. is a premier construction company in Nepal, specializing in Government of Nepal tenders — roads, bridges, buildings, and infrastructure.',
  keywords: [
    'construction company Nepal',
    'government tender Nepal',
    'infrastructure Nepal',
    'road construction Nepal',
    'building contractor Kathmandu',
    'Aadi Shakti Nirman',
  ],
  authors: [{ name: 'Aadi Shakti Nirman Sewa Pvt. Ltd.' }],
  openGraph: {
    title: 'Aadi Shakti Nirman Sewa Pvt. Ltd.',
    description: "Building Nepal's Future — Precision. Integrity. Excellence.",
    type: 'website',
    locale: 'en_NP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}