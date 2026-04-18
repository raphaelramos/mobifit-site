import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
};

const PrivacyPolicy: React.FC = () => {
  const t = useTranslations('privacy');

  return (
    <>
      {/* Page Header */}
      <section
        className="page-header"
        style={{ backgroundImage: 'url("/images/page-header.png")' }}
      >
        <div className="page-left-thumb">
          <Image
            src="/images/bg/privacy-header.png"
            alt="privacy header"
            width={500}
            height={400}
            style={{ height: "auto" }}
          />
        </div>

        <div className="container">
          <div className="page-header-content text-white">
            <h2 className="title">{t('title')}</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">{t('breadcrumb.home')}</Link>
              </li>
              <li>{t('breadcrumb.privacy')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-section padding-top padding-bottom">
        <div className="container">
          <div className="content-shell content-shell--centered">
            <div className="content-column content-column--narrow">
              <div className="section-header">
                <h2 className="title">{t('header.title')}</h2>
                <p>
                  {t('header.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="content-grid">
            {/* Navigation Menu */}
            <div className="content-column">
              <nav
                className="faq-menu"
                style={{ backgroundImage: 'url("/images/faq/faq-menu.png")' }}
              >
                <ul>
                  {[
                    { href: "#get", text: t('menu.general') },
                    { href: "#how", text: t('menu.informationCollection') },
                    { href: "#third-party-access", text: t('menu.thirdPartyAccess') },
                    { href: "#data-retention", text: t('menu.dataRetention') },
                    { href: "#security", text: t('menu.security') },
                    { href: "#changes", text: t('menu.changes') },
                    { href: "#your-consent", text: t('menu.consent') },
                  ].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="nav-link">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Privacy Content */}
            <div className="content-column">
              <div id="get" className="privacy-item">
                <h3 className="title">{t('sections.general.title')}</h3>
                <p>
                  {t('sections.general.content')}
                </p>
              </div>

              <div id="how" className="privacy-item">
                <h3 className="title">{t('sections.informationCollection.title')}</h3>
                <p>
                  {t('sections.informationCollection.intro')}
                </p>
                <ul className="privacy-list">
                  {(t.raw('sections.informationCollection.list') as string[]).map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  {t('sections.informationCollection.note')}
                </p>
                <p>
                  {t('sections.informationCollection.contact')}
                </p>
              </div>

              <div className="privacy-item" id="third-party-access">
                <h3 className="title">{t('sections.thirdPartyAccess.title')}</h3>
                <p>
                  {t('sections.thirdPartyAccess.content')}
                </p>
                <p>
                  {t('sections.thirdPartyAccess.note')}
                </p>
                <ul className="privacy-list">
                  <li>
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Play Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics for Firebase
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Firebase Crashlytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/gemini/answer/13594961"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Apps Gemini
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CloudFlare R2
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Supabase
                    </a>
                  </li>
                </ul>
                <p>
                  {t('sections.thirdPartyAccess.disclosure')}
                </p>
                <ul className="privacy-list">
                  {(t.raw('sections.thirdPartyAccess.reasons') as string[]).map((reason, index) => (
                    <li key={index}>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="privacy-item" id="data-retention">
                <h3 className="title">{t('sections.dataRetention.title')}</h3>
                <p>
                  {t('sections.dataRetention.content')}
                </p>
              </div>
              <div className="privacy-item" id="security">
                <h3 className="title">{t('sections.security.title')}</h3>
                <p>
                  {t('sections.security.content')}
                </p>
              </div>
              <div className="privacy-item" id="changes">
                <h3 className="title">{t('sections.changes.title')}</h3>
                <p>
                  {t('sections.changes.content')}
                </p>
                <p>{t('sections.changes.effective')}</p>
              </div>

              <div id="your-consent" className="privacy-item">
                <h3 className="title">{t('sections.consent.title')}</h3>
                <p>
                  {t('sections.consent.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
