import Head from 'next/head'
import Footer from '../layouts/footer'
import NavBar from '../layouts/navbar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import '../styles/bootstrap-reboot.css'
import '../styles/bootstrap.css'
import '../styles/bootstrap-utilities.css'
import '../styles/style_base.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <div className='vide' />
      <Component {...pageProps} />
      <footer className={styles.footer}></footer>
      <Footer />
    </>
  )
}

export default MyApp
