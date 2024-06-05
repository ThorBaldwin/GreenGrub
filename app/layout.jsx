import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenGrub Food Delivery",
  description: "Sustainable food delivery, right to your door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}