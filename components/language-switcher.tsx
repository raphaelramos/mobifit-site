'use client';

import { ChangeEvent, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('common');

  const handleChangeLocale = useCallback(
    (newLocale: string) => {
      if (newLocale === locale) return;

      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
      window.location.reload();
    },
    [locale]
  );

  const locales = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="language-switcher">
      <select
        className="language-select"
        value={locale}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleChangeLocale(event.target.value)
        }
        aria-label={t('language')}
      >
        {locales.map((loc) => (
          <option key={loc.code} value={loc.code}>
            {`${loc.flag} ${loc.label}`}
          </option>
        ))}
      </select>
    </div>
  );
}
