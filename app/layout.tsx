import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elétrica Valdres — São Paulo | 5.0★ no Google (115 avaliações)",
  description:
    "Elétrica Valdres em São Paulo: instalações, manutenção e ar-condicionado com trabalho real documentado. 5.0 no Google com 115 avaliações. WhatsApp (11) 98974-9956.",
  keywords: ["eletricista São Paulo", "padrão de entrada", "ar-condicionado", "Elétrica Valdres"],
  openGraph: { title: "Elétrica Valdres — oficina técnica urbana", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
