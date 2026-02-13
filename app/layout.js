import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhaumik - AI/ML Engineer & Software Developer',
  description: 'Personal portfolio of Bhaumik - AI/ML Engineer and Software Developer specializing in intelligent systems, LLMs, computer vision, and scalable web applications.',
  keywords: 'AI, Machine Learning, Software Developer, Portfolio, LLMs, Computer Vision, Robotics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
