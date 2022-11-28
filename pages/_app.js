import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
