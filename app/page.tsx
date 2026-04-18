import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/footer";
import Platform from "@/components/platform";
import Script from "next/script";

function splitFeature(copy: string) {
  const [title, ...rest] = copy.split(/:\s*/);

  return {
    title,
    description: rest.join(": ") || copy,
  };
}

export default async function Home() {
  const t = await getTranslations();
  const features = [
    t("amazing.challenges"),
    t("amazing.ai"),
    t("amazing.offline"),
    t("amazing.library"),
  ].map(splitFeature);

  return (
    <main className="mf-home">
      <Script
        id="mobifit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "MobiFit",
            url: "https://mobifit.app",
            description:
              "Fitness app that integrates offline workouts, exercise videos, group challenges, and AI-powered features. With functionalities similar to apps like Gymrats, MFit Personal, Nike Training Club, and Freeletics, it offers an all-in-one solution for gyms, personal trainers, and athletes. Includes gamification and reward systems to encourage goal achievement.",
            applicationCategory: [
              "HealthApplication",
              "FitnessApplication",
              "LifestyleApplication",
            ],
            operatingSystem: "Android, iOS",
            isAccessibleForFree: true,
            featureList: [
              "Offline workouts",
              "Exercise videos",
              "Group challenges",
              "Gamification with rewards",
              "Diet tools",
              "AI-powered training tools",
            ],
            inLanguage: ["pt", "en", "es"],
            sameAs: [
              "https://play.google.com/store/apps/details?id=app.mobifit",
              "https://apps.apple.com/us/app/mobifit-start/id6737747199",
            ],
            datePublished: "2024-11-07",
            author: {
              "@type": "Person",
              name: "Raphael Ramos",
              url: "https://raphaelramos.dev",
            },
            availableOnDevice: [
              "iPhone",
              "iPad",
              "Android Phone",
              "Android Tablet",
            ],
          }),
        }}
      />

      <section className="mf-hero">
        <div className="container">
          <div className="mf-hero-grid">
            <div className="mf-hero-copy">
              <h1 className="mf-hero-title">{t("banner.title")}</h1>
              <p className="mf-hero-description">{t("banner.description")}</p>
              <Platform className="mf-store-buttons" />
            </div>

            <div className="mf-hero-visual">
              <div className="mf-device-stage">
                <div className="mf-device-halo" />
                <div className="mf-floating-card mf-floating-card--top">
                  <span>01</span>
                  <strong>{features[0].title}</strong>
                </div>
                <div className="mf-floating-card mf-floating-card--bottom">
                  <span>02</span>
                  <strong>{features[1].title}</strong>
                </div>
                <div className="mf-device-frame">
                  <div className="mf-device-screen">
                    <Image
                      src="/images/extra-2/banner/banner17.png"
                      alt="MobiFit App em smartphone mostrando interface de treino"
                      width={500}
                      height={585}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mf-hero-panel">
                <p>{t("home.showcaseDescription")}</p>
                <ul>
                  {features.slice(0, 3).map((feature) => (
                    <li key={feature.title}>{feature.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mf-features-section">
        <div className="container">
          <div className="mf-feature-layout">
            <div className="mf-feature-intro">
              <h2>{t("home.featureTitle")}</h2>
              <p>{t("home.featureDescription")}</p>

              <div className="mf-trust-note">
                <strong>{t("home.privacyTitle")}</strong>
                <p>{t("amazing.privacy")}</p>
              </div>
            </div>

            <div className="mf-feature-grid">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`mf-feature-card ${
                    index === 0 ? "mf-feature-card--highlight" : ""
                  }`}
                >
                  <span className="mf-feature-index">{`0${index + 1}`}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mf-showcase-section">
        <div className="container">
          <div className="mf-showcase-grid">
            <div className="mf-showcase-visual">
              <div className="mf-showcase-glow" />
              <div className="mf-showcase-card">
                <Image
                  src="/images/extra-2/platform.png"
                  alt="Funcionalidades do MobiFit"
                  width={640}
                  height={660}
                />
              </div>
            </div>

            <div className="mf-showcase-copy">
              <h2>{t("home.showcaseTitle")}</h2>
              <p>{t("home.showcaseDescription")}</p>

              <div className="mf-benefit-stack">
                {features.map((feature) => (
                  <div key={feature.title} className="mf-benefit-item">
                    <strong>{feature.title}</strong>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
