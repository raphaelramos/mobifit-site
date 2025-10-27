import Image from "next/image";
import Footer from "@/components/footer";
import Platform from "@/components/platform";

export default function Home() {
  const jsonLd = {
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
  }

  return (
    <div>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
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
                <h1 className="title">Comece hoje seu desafio com MobiFit!</h1>
                <p>
                  Mantenha-se motivado nos desafios com check-ins diários que registram suas 
                  atividades físicas.
                </p>
                <p>
                  Acompanhe sua evolução e acesse nossa biblioteca completa de exercícios e treinos, disponível mesmo sem conexão 
                  com internet - perfeito para seus momentos na academia.
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
                  <span className="cate">Recursos exclusivos</span>
                  <h2 className="title padding-bottom-2">Descubra o poder do MobiFit</h2>
                  <p>
                    <strong>Desafios:</strong> Comece um projeto individual ou em grupo, compartilhe 
                    sua evolução, participe de rankings e acesse materiais exclusivos.
                  </p>
                  <p>
                    <strong>Funcionalidade Offline:</strong> Não deixe a internet ruim atrapalhar seu treino. 
                    Nossa biblioteca de exercícios e treinos funciona mesmo sem internet.
                  </p>
                  <p>
                    <strong>Biblioteca Profissional:</strong> Explore uma coleção abrangente de treinos com orientações 
                    em vídeo, imagem e texto, elaborados por profissionais certificados em educação física e nutrição.
                  </p>
                  <p>
                    <strong>Assistente de IA:</strong> Nossa inteligência artificial personalizada 
                    ajuda você a encontrar exercícios ideais para seus objetivos, responde 
                    dúvidas técnicas e sugere adaptações para seu nível de condicionamento.
                  </p>
                  <p>
                    <strong>Privacidade:</strong> Login é opcional para a maioria das 
                    funcionalidades sem grupo e somente os dados inseridos após o acesso serão armazenados. 
                    Você pode excluir suas informações a qualquer momento diretamente pelo menu, garantindo total controle sobre sua privacidade.
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
