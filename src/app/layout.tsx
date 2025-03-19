import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wpp from "./components/wpp";

export const metadata: Metadata = {
  title: "Marmoraria Florianópolis",
  description:
    "Marmoraria Florianópolis - Transformando espaços com mármores e granitos de alta qualidade.",
  icons: {
    icon: ['/favicon.ico?v=5'],
    apple: ['/apple-touch-icon.png?v=5'],
    shortcut: ['/apple-touch-icon.png?v=5'],
  },
  // Open Graph (OG) Tags para redes sociais
  openGraph: {
    title: "Marmoraria Florianópolis",
    description: "Transformando espaços com mármores e granitos de alta qualidade.",
    url: "https://marmorariaflorianopolis.com/materials",
    siteName: "Marmoraria Florianópolis",
    images: [
      {
        url: "https://marmorariaflorianopolis.com/images/og-image.jpg", // Imagem para o Open Graph
        width: 1200,
        height: 630,
        alt: "Marmoraria Florianópolis",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico?v=5" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Wpp />
        <Footer />
      </body>
    </html>
  );
}
