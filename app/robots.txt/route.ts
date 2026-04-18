import { NextResponse } from "next/server";
import { CONTENT_SIGNAL, SITE_URL } from "@/src/site";

const robotsBody = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /join",
  `Content-Signal: ${CONTENT_SIGNAL}`,
  "",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  "",
].join("\n");

export function GET() {
  return new NextResponse(robotsBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
