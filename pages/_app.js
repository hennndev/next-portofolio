import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/ui/navbar'
import Footer from '../components/ui/footer'

function MyApp({ Component, pageProps }) {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <main className={`${darkTheme ? 'dark' : 'light'}`}>
      <Navbar toggleTheme={() => setDarkTheme(!darkTheme)} darkTheme={darkTheme}/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}

export default MyApp
