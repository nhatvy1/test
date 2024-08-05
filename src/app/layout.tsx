import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import Footer from '@/components/Footer'
import Widget from '@/components/Widget'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import { Open_Sans, Roboto_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <CounterStoreProvider>
          <>
            <Navbar />
            {children}
            <Footer />
            <Widget />
            <div className='bg-fixed bg-parallax-home fixed top-0 left-0 w-full h-screen -z-[100] brightness-50'></div>
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </>
        </CounterStoreProvider>
      </body>
    </html>
  )
}
