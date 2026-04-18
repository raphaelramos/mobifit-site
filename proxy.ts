import { NextRequest, NextResponse } from "next/server";
import { buildDiscoveryLinks, isJoinRoute, MARKDOWN_ROUTES } from "@/src/site";

function acceptsMarkdown(request: NextRequest) {
  return request.headers.get("accept")?.includes("text/markdown");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (acceptsMarkdown(request) && MARKDOWN_ROUTES.has(pathname)) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/__agent/markdown";
    rewriteUrl.searchParams.set("path", pathname);

    return NextResponse.rewrite(rewriteUrl);
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept, Accept-Language, Cookie");

  if (isJoinRoute(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  const discoveryLinks = buildDiscoveryLinks(pathname);

  if (discoveryLinks.length > 0) {
    response.headers.set("Link", discoveryLinks.join(", "));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
