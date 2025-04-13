import Image from "next/image";
import Footer from "@/components/footer";
import Platform from "@/components/platform";
import Script from "next/script";

export default function Home() {
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
              "FitnessApplication"
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
            }
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
                <h1 className="title">Comece hoje seu projeto!</h1>
                <p>
                  É um desafio diário! Faça check-in para registrar sua
                  atividade física ou dieta.
                </p>
                <p>
                  Acompanhe seu progresso e acesse conteúdos exclusivos, mesmo
                  sem internet, para ajudar nos seus treinos na academia.
                </p>
                <Platform />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="banner-thumb">
                <Image
                  src="/images/extra-2/banner/banner17.png"
                  alt="banner"
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
                  alt="amazing"
                  width={640}
                  height={660}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="padding-bottom padding-top pb-max-lg-0 pt-max-lg-half">
                <div className="section-header left-style">
                  <span className="cate">Foco no projeto</span>
                  <h2 className="title padding-bottom-2">Instale agora</h2>
                  <p>
                    Grupos: Comece um projeto sozinho ou em grupo, onde é
                    possível publicar sua evolução para os membros, ver rakings
                    dos participantes e material exclusivo;
                  </p>
                  <p>
                    Offline: Maioria dos recursos funcionam mesmo se sua
                    internet estiver ruim no momento;
                  </p>
                  <p>
                    Biblioteca de treinos: Sugestões de treinos, com orientação
                    em imagem, vídeo e texto criado por profissionais formados e
                    reconhecidos;
                  </p>
                  <p>IA: irá te ajudar encontrar exercícios e tirar dúvidas;</p>
                  <p>
                    Privacidade: Oferecemos login opcional para a maioria das
                    funcionalidades. Além disso, não armazenamos dados se não
                    realizar o login, e após, você pode solicitar a exclusão
                    completa de suas informações a qualquer momento diretamente
                    no menu.
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
