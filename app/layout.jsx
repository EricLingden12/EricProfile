import { Inter, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Changed from width to weight
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric Lingden Portfolio",
  description: "Portfolio of Eric Lingden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
