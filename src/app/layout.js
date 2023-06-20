import NavBar from '../../components/nav'
import Footer from '../../components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className="no-gutter no-roofing">
      <NavBar/>
      {children}
      <Footer/>
    </body>
  </html>
  )
}
