import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />

        {/* Bootstrap CDN */}
        <Script
          id="bootstrap-cdn"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
