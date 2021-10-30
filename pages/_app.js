import '../styles/globals.css'
import Navbar from '../components/ui/navbar'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <main className={`${darkTheme ? 'dark' : 'light'}`}>
      <Navbar toggleTheme={() => setDarkTheme(!darkTheme)} darkTheme={darkTheme}/>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
