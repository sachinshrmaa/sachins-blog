
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect } from "react";
import Newsletter from '../components/Newsletter';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  return(
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default MyApp
