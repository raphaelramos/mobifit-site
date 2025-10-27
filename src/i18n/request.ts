import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  // 1. User cookie (highest priority)
  const cookieLocale = cookieStore.get('locale')?.value;

  // 2. Browser language (fallback)
  const acceptLanguage = headersList.get('accept-language');
  const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0]; // 'pt-BR' → 'pt'

  // 3. Supported locales list
  const supportedLocales = ['en', 'pt', 'es'];

  // 4. Determine final locale
  const locale = cookieLocale ||
                 (browserLocale && supportedLocales.includes(browserLocale) ? browserLocale : 'en');

  // Load base messages
  const baseMessages = (await import(`../../messages/${locale}.json`)).default;

  // Load privacy messages
  const privacyMessages = (await import(`../../messages/privacy/${locale}.json`)).default;

  return {
    locale,
    messages: {
      ...baseMessages,
      privacy: privacyMessages,
    },
  };
});
