
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  return(
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
