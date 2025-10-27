'use client';

import { useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('common');

  const handleChangeLocale = useCallback(
    (newLocale: string) => {
      if (newLocale === locale) return;

      // Set the locale in a cookie
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;

      // Reload the page to apply the new locale
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
      <span className="language-label">{t('language')}:</span>
      <div className="language-options">
        {locales.map((loc) => (
          <button
            key={loc.code}
            onClick={() => handleChangeLocale(loc.code)}
            className={`language-option ${locale === loc.code ? 'active' : ''}`}
            aria-label={`Switch to ${loc.label}`}
          >
            <span className="flag">{loc.flag}</span>
            <span className="label">{loc.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
