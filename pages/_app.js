import Head from 'next/head'
import Footer from '../layouts/footer'
import NavBar from '../layouts/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <div className='vide' />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
