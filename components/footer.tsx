"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import Platform from "./platform";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer>
      <section
        className="footer-section-16 bg_img padding-top"
        style={{
          backgroundImage: `url('/images/extra/footer/footer-bg.png')`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-6">
              <div className="section-header cl-white">
                <h2 className="title">{t("title")}</h2>
              </div>
            </div>
          </div>

          <Platform />

          <div className="footer-bottom padding-top">
            <div className="footer-menu">
              <ul className="footer-link">
                <li>
                  <Link href="/">{t("home")}</Link>
                </li>
                <li>
                  <a href="https://www.instagram.com/mobifit.app/">{t("instagram")}</a>
                </li>
                 <li>
                  <Link href="/help">{t("help")}</Link>
                </li>
                <li>
                  <a href="privacy">{t("privacy")}</a>
                </li>
              </ul>
            </div>
            <div className="footer-language-wrapper">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="copyright border-ash">
            {t("copyright", { year, author: "Raphael Ramos" })}
            {" "}
            <a href="https://raphaelramos.dev">Raphael Ramos</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
