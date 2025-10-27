import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/footer";
import Platform from "@/components/platform";
import Script from "next/script";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div>
      {/* Schema.org JSON-LD */}
      <Script
        id="mobifit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "MobiFit",
            "url": "https://mobifit.app",
            "description": "Fitness app that integrates offline workouts, exercise videos, group challenges, and AI-powered features. With functionalities similar to apps like Gymrats, MFit Personal, Nike Training Club, and Freeletics, it offers an all-in-one solution for gyms, personal trainers, and athletes. Includes gamification and reward systems to encourage goal achievement.",
            "applicationCategory": [
              "HealthApplication",
              "FitnessApplication",
              "LifestyleApplication"
            ],
            "operatingSystem": "Android, iOS",
            "isAccessibleForFree": true,
            "featureList": [
              "Offline workouts",
              "Exercise videos",
              "Group challenges",
              "Gamification with rewards",
              "Diet tools",
              "AI-powered training tools"
            ],
            "inLanguage": [
              "pt",
              "en",
              "es"
            ],
            "sameAs": [
              "https://play.google.com/store/apps/details?id=app.mobifit",
              "https://apps.apple.com/us/app/mobifit-start/id6737747199"
            ],
            "datePublished": "2024-11-07",
            "author": {
              "@type": "Person",
              "name": "Raphael Ramos",
              "url": "https://raphaelramos.dev"
            },
            "availableOnDevice": [
              "iPhone",
              "iPad",
              "Android Phone",
              "Android Tablet"
            ]
          })
        }}
      />

      {/* Banner Section */}
      <section
        className="section padding-top-2 bg_img oh bottom_center"
        style={{
          backgroundImage: `url('/images/extra-2/banner/banner-bg-17.png')`,
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="banner-content-18 cl-white">
                <h1 className="title">{t("banner.title")}</h1>
                <p>
                  {t("banner.description1")}
                </p>
                <p>
                  {t("banner.description2")}
                </p>
                <Platform />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="banner-thumb">
                <Image
                  src="/images/extra-2/banner/banner17.png"
                  alt="MobiFit App em smartphone mostrando interface de treino"
                  width={482}
                  height={739}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazing Platform Section */}
      <section className="section oh">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="rtl amazing-flatform-thumb">
                <Image
                  src="/images/extra-2/platform.png"
                  alt="Funcionalidades do MobiFit"
                  width={640}
                  height={660}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="padding-bottom padding-top pb-max-lg-0 pt-max-lg-half">
                <div className="section-header left-style">
                  <span className="cate">{t("amazing.category")}</span>
                  <h2 className="title padding-bottom-2">{t("amazing.title")}</h2>
                  <p>
                    {t("amazing.challenges")}
                  </p>
                  <p>
                    {t("amazing.offline")}
                  </p>
                  <p>
                    {t("amazing.library")}
                  </p>
                  <p>
                    {t("amazing.ai")}
                  </p>
                  <p>
                    {t("amazing.privacy")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
