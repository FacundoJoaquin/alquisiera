import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Alquisiera | Alquileres en Puerto Madryn",
  description:
    "Encuentra todos los alquileres de Puerto Madryn en un solo lugar. Búsqueda centralizada de propiedades en Barrio Sur, Norte, Solanas y más zonas destacadas.",
  keywords:
    "alquileres puerto madryn, departamentos puerto madryn, alquilar en puerto madryn, inmobiliarias puerto madryn, barrio sur, barrio norte, solanas, las quintas del mirador",
  openGraph: {
    title: "Alquisiera | Alquileres en Puerto Madryn",
    description:
      "Encuentra todos los alquileres de Puerto Madryn en un solo lugar. Búsqueda centralizada de propiedades en las mejores zonas.",
    url: "https://alquisiera.vercel.app",
    siteName: "Alquisiera",
    images: [
      {
        url: "https://i.postimg.cc/WpW97cND/whale.webp",
        width: 1160,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alquisiera.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Alquisiera Puerto Madryn",
              description:
                "Servicio gratuito de búsqueda centralizada de alquileres en Puerto Madryn. Encuentra propiedades en los mejores barrios como Sur, Norte, Solanas y Las Quintas del Mirador.",
              url: "https://alquisiera.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Puerto Madryn",
                addressRegion: "Chubut",
                addressCountry: "Argentina",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -42.7692,
                longitude: -65.0385,
              },
              areaServed: {
                "@type": "City",
                name: "Puerto Madryn",
                containsPlace: [
                  {
                    "@type": "Place",
                    name: "Barrio Sur",
                  },
                  {
                    "@type": "Place",
                    name: "Barrio Norte",
                  },
                  {
                    "@type": "Place",
                    name: "Solanas",
                  },
                  {
                    "@type": "Place",
                    name: "Las Quintas del Mirador",
                  },
                ],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://alquisiera.vercel.app/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
