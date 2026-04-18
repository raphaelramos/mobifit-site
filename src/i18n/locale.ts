import { cookies, headers } from "next/headers";

export const SUPPORTED_LOCALES = ["en", "pt", "es"] as const;
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SiteLocale = "en";

type MessageBundle = {
  baseMessages: typeof import("../../messages/en.json");
  helpMessages: typeof import("../../messages/help/en.json");
  privacyMessages: typeof import("../../messages/privacy/en.json");
};

export function normalizeLocale(value?: string | null): SiteLocale | null {
  if (!value) {
    return null;
  }

  const locale = value.toLowerCase();

  if (SUPPORTED_LOCALES.includes(locale as SiteLocale)) {
    return locale as SiteLocale;
  }

  return null;
}

export function resolveLocaleFromValues(
  cookieLocale?: string | null,
  acceptLanguage?: string | null,
): SiteLocale {
  const normalizedCookieLocale = normalizeLocale(cookieLocale);

  if (normalizedCookieLocale) {
    return normalizedCookieLocale;
  }

  const browserLocale = acceptLanguage?.split(",")[0]?.split("-")[0];
  const normalizedBrowserLocale = normalizeLocale(browserLocale);

  return normalizedBrowserLocale ?? DEFAULT_LOCALE;
}

export async function resolveRequestLocale() {
  const cookieStore = await cookies();
  const headersList = await headers();

  return resolveLocaleFromValues(
    cookieStore.get("locale")?.value,
    headersList.get("accept-language"),
  );
}

export async function loadMessageBundle(locale: SiteLocale): Promise<MessageBundle> {
  const [baseMessages, helpMessages, privacyMessages] = await Promise.all([
    import(`../../messages/${locale}.json`).then((module) => module.default),
    import(`../../messages/help/${locale}.json`).then((module) => module.default),
    import(`../../messages/privacy/${locale}.json`).then((module) => module.default),
  ]);

  return {
    baseMessages,
    helpMessages,
    privacyMessages,
  };
}
