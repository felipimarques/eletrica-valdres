import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elétrica Valdres — São Paulo | 5.0★ no Google (115 avaliações)",
  description:
    "Elétrica Valdres em São Paulo: instalação de ar-condicionado, padrão de entrada, quadros e pontos elétricos. 5.0 no Google com 115 avaliações. WhatsApp (11) 98974-9956.",
  keywords: ["eletricista São Paulo", "padrão de entrada", "ar condicionado instalação", "Elétrica Valdres"],
  openGraph: { title: "Elétrica Valdres — 5.0★ no Google, 115 avaliações", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
