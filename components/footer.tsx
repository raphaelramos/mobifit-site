"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Platform from "./platform";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mf-footer">
      <section className="padding-top">
        <div className="container">
          <div className="mf-footer-panel">
            <div className="mf-footer-top">
              <div className="mf-footer-brand">
                <Link href="/" className="mf-brand mf-brand--footer">
                  <Image src="/logo.png" alt="MobiFit" width={52} height={52} />
                </Link>
                <p>{t("title")}</p>
              </div>

              <Platform className="mf-store-buttons mf-store-buttons--footer" />
            </div>

            <div className="mf-footer-bottom">
              <ul className="mf-footer-links">
                <li>
                  <Link href="/">{t("home")}</Link>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mobifit.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("instagram")}
                  </a>
                </li>
                <li>
                  <Link href="/help">{t("help")}</Link>
                </li>
                <li>
                  <Link href="/privacy">{t("privacy")}</Link>
                </li>
              </ul>
            </div>

            <div className="mf-footer-copy">
              {`Copyright © ${year}. `}
              <a
                href="https://raphaelramos.dev"
                target="_blank"
                rel="noreferrer"
              >
                Raphael Ramos
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
