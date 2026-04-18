import { NextRequest, NextResponse } from "next/server";
import { renderMarkdownForPath, estimateMarkdownTokens } from "@/src/agent-markdown";
import { CONTENT_SIGNAL, buildDiscoveryLinks, normalizePathname } from "@/src/site";

function buildResponse(pathname: string, markdown: string | null) {
  if (!markdown) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const response = new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Signal": CONTENT_SIGNAL,
      Vary: "Accept, Accept-Language, Cookie",
      "X-Markdown-Tokens": estimateMarkdownTokens(markdown).toString(),
    },
  });

  const discoveryLinks = buildDiscoveryLinks(pathname);

  if (discoveryLinks.length > 0) {
    response.headers.set("Link", discoveryLinks.join(", "));
  }

  return response;
}

export async function GET(request: NextRequest) {
  const pathname = normalizePathname(
    request.headers.get("x-agent-markdown-path") ??
      request.nextUrl.searchParams.get("path") ??
      "/",
  );
  const markdown = await renderMarkdownForPath(pathname);

  return buildResponse(pathname, markdown);
}

export async function HEAD(request: NextRequest) {
  const pathname = normalizePathname(
    request.headers.get("x-agent-markdown-path") ??
      request.nextUrl.searchParams.get("path") ??
      "/",
  );
  const markdown = await renderMarkdownForPath(pathname);
  const response = buildResponse(pathname, markdown);

  return new NextResponse(null, {
    status: response.status,
    headers: response.headers,
  });
}
