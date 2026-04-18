"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/footer";

interface FAQQuestion {
  question: string;
  answer?: string;
  video?: string;
}

const HelpPage = () => {
  const t = useTranslations('help');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionKey: string, questionIndex: number) => {
    const key = `${sectionKey}-${questionIndex}`;
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    { key: 'about', text: t('sections.about.title') },
    { key: 'ai', text: t('sections.ai.title') },
    { key: 'workouts', text: t('sections.workouts.title') },
    { key: 'goals', text: t('sections.goals.title') },
    { key: 'groups', text: t('sections.groups.title') },
    { key: 'challenges', text: t('sections.challenges.title') },
    { key: 'gamification', text: t('sections.gamification.title') },
    { key: 'sharing', text: t('sections.sharing.title') },
    { key: 'data', text: t('sections.data.title') },
    { key: 'trainers', text: t('sections.trainers.title') },
  ];

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

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
            alt="help header"
            width={500}
            height={400}
          />
        </div>

        <div className="container">
          <div className="page-header-content text-white">
            <h2 className="title">{t('title')}</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">{t('breadcrumb.home')}</Link>
              </li>
              <li>{t('breadcrumb.help')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Help Content */}
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
                  {sections.map((item) => (
                    <li key={item.key}>
                      <a href={`#${item.key}`} className="nav-link">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Help Content with FAQPage Microdata */}
            <div className="content-column" itemScope itemType="https://schema.org/FAQPage">
              {sections.map((section) => (
                <div key={section.key} id={section.key} className="privacy-item">
                  <h3 className="title">{section.text}</h3>
                  <div className="faq-list">
                    {(t.raw(`sections.${section.key}.questions`) as FAQQuestion[]).map((question, index: number) => {
                      const isOpen = openSections[`${section.key}-${index}`];

                      return (
                        <div key={index} className="faq-entry" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                          <button
                            type="button"
                            className="faq-question"
                            onClick={() => toggleSection(section.key, index)}
                            aria-expanded={isOpen}
                          >
                            <h5 itemProp="name">{question.question}</h5>
                            <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
                          </button>
                          <div
                            className="faq-answer"
                            hidden={!isOpen}
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
                            {question.answer && <p itemProp="text">{question.answer}</p>}
                            {question.video && (
                              <div className="faq-video">
                                <iframe
                                  height="315"
                                  src={getYouTubeEmbedUrl(question.video)}
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  loading="lazy"
                                ></iframe>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HelpPage;
