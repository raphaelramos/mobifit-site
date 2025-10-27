"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/footer";

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
        className="section page-header bg-cover relative"
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">{t('header.title')}</h2>
                <p>
                  {t('header.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-between">
            {/* Navigation Menu */}
            <div className="col-lg-4">
              <nav
                className="faq-menu bg_img mb-30"
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
            <div className="col-lg-8 col-xl-7" itemScope itemType="https://schema.org/FAQPage">
              {sections.map((section) => (
                <div key={section.key} id={section.key} className="privacy-item">
                  <h3 className="title">{section.text}</h3>
                  {t.raw(`sections.${section.key}.questions`).map((question: any, index: number) => {
                    const isOpen = openSections[`${section.key}-${index}`];
                    return (
                      <div key={index} className="faq-item mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <div
                          className="faq-question d-flex justify-content-between align-items-center p-3 bg-white border rounded cursor-pointer shadow-sm"
                          onClick={() => toggleSection(section.key, index)}
                          style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                          <h5 className="mb-0 text-dark" itemProp="name">{question.question}</h5>
                          <span className="faq-toggle text-primary fw-bold">{isOpen ? '−' : '+'}</span>
                        </div>
                        {isOpen && (
                          <div className="faq-answer p-3 rounded-bottom" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            {question.answer && <p className="mb-3" itemProp="text">{question.answer}</p>}
                            {question.video && (
                              <div className="mt-3">
                                <iframe
                                  width="100%"
                                  height="315"
                                  src={getYouTubeEmbedUrl(question.video)}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="rounded"
                                ></iframe>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
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