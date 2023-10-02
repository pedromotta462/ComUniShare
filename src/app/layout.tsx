import NavBar from '@/components/nav/NavBar'
import Footer from '../components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MessagesSquare } from 'lucide-react';
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ComUniShare',
  description: 'Juntos moldamos um amanhã sustentável',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <div className='fixed z-10 right-5 bottom-[130px]'>
          <Button className='w-[70px] h-[70px] rounded-full border border-2 bg-[#E26E44] hover:bg-[#d2bc14]'>
            <MessagesSquare color='black' size={48} className=''/>
          </Button>
        </div>
      </body>
    </html>
  )
}
