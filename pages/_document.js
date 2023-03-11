

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lusitana&family=Plus+Jakarta+Sans:wght@300&family=Source+Serif+Pro:wght@300;700;900&display=swap" rel="stylesheet" />

            {/* adsense script */}
            <Script 
                strategy="beforeInteractive"
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7352636507358273"
                crossorigin="anonymous"
            />

            

     
     
      <body>
        <Main />
        <NextScript />

      </body>
      
    </Html>
  )
}