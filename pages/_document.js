

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lusitana&family=Plus+Jakarta+Sans:wght@300&family=Source+Serif+Pro:wght@300;700;900&display=swap" rel="stylesheet" />

            {/* Google Adsense Scripts */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7352636507358273" crossorigin="anonymous"></script>

            <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h);p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/5e93d1e3a83679d27d02d635f/e839b3a3bd9d62f877275935e.js");</script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}