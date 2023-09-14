import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sachins Blog",
  description: "The personal blog of Sachin Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
