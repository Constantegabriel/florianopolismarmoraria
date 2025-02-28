import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wpp from "./components/wpp";

export const metadata: Metadata = {
  title: "Marmoraria Florianópolis",
  description:
    "Marmoraria Florianópolis - Transformando espaços com mármores e granitos de alta qualidade.",
  icons:{
    icon:['/favicon.ico?v=5'],
    apple:['/apple-touch-icon.png?v=5'],
    shortcut:['/apple-touch-icon.png?v=5'],
  }
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
