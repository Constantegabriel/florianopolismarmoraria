import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://marmorariaflorianopolis.com";  // Substitua pela URL do seu domínio

  const pages = ["", "services", "materials", "enterprise", "contact"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <priority>0.8</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml", // Garantindo que o tipo de conteúdo esteja correto
    },
  });
}
