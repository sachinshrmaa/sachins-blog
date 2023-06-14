import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
