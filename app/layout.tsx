import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eletricavaldres.com.br"),
  title: "Elétrica Valdres | Eletricista e Ar-Condicionado em São Paulo",
  description:
    "Instalações elétricas, ar-condicionado, manutenção predial e atendimento emergencial em São Paulo. Nota 5,0 no Google com 115 avaliações. Orçamento pelo WhatsApp.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Elétrica Valdres | Eletricista e Ar-Condicionado em São Paulo",
    description:
      "Instalações elétricas, ar-condicionado, manutenção predial e atendimento emergencial em São Paulo. Nota 5,0 com 115 avaliações.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/ig/post-05.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
