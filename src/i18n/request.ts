import { getRequestConfig } from "next-intl/server";
import { loadMessageBundle, resolveRequestLocale } from "@/src/i18n/locale";

export default getRequestConfig(async () => {
  const locale = await resolveRequestLocale();
  const { baseMessages, helpMessages, privacyMessages } = await loadMessageBundle(
    locale,
  );

  return {
    locale,
    messages: {
      ...baseMessages,
      privacy: privacyMessages,
      help: helpMessages,
    },
  };
});
