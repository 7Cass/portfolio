import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'] });

export const metadata = {
  title: 'JP Dev | Portfolio',
  description: 'Portfolio pessoal de João Pedro Arruda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-full bg-zinc-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
