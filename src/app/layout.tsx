import Nav from '@/components/Navbar'
import './globals.css'
import { Atkinson_Hyperlegible } from 'next/font/google'

const font = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Todo',
  description: 'Todo app made using app directory of next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav/>
        {children}</body>
    </html>
  )
}
