import type { MetadataRoute } from "next";

export const SITE_URL = "https://mobifit.app";
export const CONTENT_SIGNAL = "ai-train=no, search=yes, ai-input=no";

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

export const SITEMAP_ROUTES: SitemapEntry[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/help",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/privacy",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/account/delete-account",
    changeFrequency: "yearly",
    priority: 0.4,
  },
];

export const MARKDOWN_ROUTES = new Set([
  ...SITEMAP_ROUTES.map((route) => route.path),
  "/account/update-password",
]);

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalizedPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return normalizedPathname || "/";
}

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function isJoinRoute(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  return normalizedPathname === "/join" || normalizedPathname.startsWith("/join/");
}

export function buildDiscoveryLinks(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);
  const links: string[] = [];

  if (MARKDOWN_ROUTES.has(normalizedPathname)) {
    links.push(`<${normalizedPathname}>; rel="alternate"; type="text/markdown"`);
  }

  if (normalizedPathname === "/") {
    links.push("</help>; rel=\"help\"");
    links.push("</privacy>; rel=\"privacy-policy\"");
  }

  return links;
}
