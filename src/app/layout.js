import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Animation Scroll',
  description: 'Explore the features and examples of the react-animation-scroll npm package for smooth scroll animations in React.',
  keywords: ["React", "animation", "scroll", "npm package", "demo"],
  author: "Teguh Kirana Berutu",
  socialMedia: {
    linkdin: "teguhkiranaberutu",
    github: "teguh161402025"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-t from-green-400 via-cyan-900 to-blue-500 h-full overflow-x-hidden ${inter.className}`}>{children}</body>
    </html>
  )
}
