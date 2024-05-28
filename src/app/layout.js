import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Alquisiera",
  description: "Todos los alquileres de Puerto Madryn en un solo lugar, a un click de distancia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Analytics />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
