import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aadi Shakti Nirman Sewa Pvt. Ltd. — Building Nepal\'s Future',
  description:
    'Government-certified contractor specialising in roads, bridges, buildings, and critical infrastructure across Nepal. Precision engineering, delivered on time.',
  keywords: [
    'construction company Nepal',
    'government tender Nepal',
    'infrastructure Nepal',
    'road construction Nepal',
    'bridge construction Nepal',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
