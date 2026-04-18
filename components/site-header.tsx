"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/help", key: "help" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("footer");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mf-site-header">
      <div className="container">
        <div className={`mf-topbar mf-topbar--site ${isOpen ? "is-open" : ""}`}>
          <Link href="/" className="mf-brand" aria-label="MobiFit">
            <Image src="/logo.png" alt="MobiFit" width={56} height={56} />
          </Link>

          <button
            type="button"
            className={`mf-menu-toggle ${isOpen ? "is-open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-navigation"
            className={`mf-site-nav ${isOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mf-site-nav__link ${isActive ? "is-active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className={`mf-topbar-actions mf-topbar-actions--site ${isOpen ? "is-open" : ""}`}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
