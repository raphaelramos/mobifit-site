import Image from "next/image";
import Footer from "@/components/footer";
import Platform from "@/components/platform";

export default function Home() {
  return (
    <div>
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
                <h1 className="title">Comece hoje seu projeto.</h1>
                <p>
                  Comece seu projeto, mude seu corpo e conheça novas pessoas
                  pelo aplicativo.
                </p>
                <p>
                  Acesse no momento em que você vai dedicar ao seu projeto e
                  faça check-in. Pode ser um treino, dieta, caminhada, qualquer
                  coisa para cuidar do seu corpo.
                </p>
                <p>
                  Acompanhe seu progresso e tenha acesso a vários conteúdos.
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
                  <span className="cate">Hora de foco no projeto</span>
                  <h2 className="title padding-bottom-2">Instale agora</h2>
                  <p>
                    Projetos: Comece um projeto sozinho ou em grupo, onde é
                    possível publicar sua evolução para os membros, ver rakings
                    do projeto e material exclusivo;
                  </p>
                  <p>
                    Offline: Maioria dos recursos funcionam mesmo se sua
                    internet estiver ruim no momento;
                  </p>
                  <p>
                    Planos de treinamento: Sugestões de treinos, com orientação
                    em imagem, vídeo e texto criado por profissionais;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      {/* <section className="section video-tour-section padding-top padding-bottom-2">
        <div className="container">
          <div className="section-header">
            <span className="cate">AMAZING TUTORIAL</span>
            <h2 className="title">Video Tour</h2>
            <p>Vamos ver como funciona</p>
          </div>
          <div
            className="video-tour-wrapper bg_img"
            style={{
              backgroundImage: `url('/images/extra-2/video/video-bg.png')`,
            }}
          >
            <div
              className="ball-7"
              style={{
                backgroundImage: `url('/images/extra-2/video/video.png')`,
              }}
            ></div>
            <a
              href="https://www.youtube.com/watch?v=xxx"
              className="video-tour-item popup"
            >
              <div className="icon">
                
              </div>
              <div className="cont">
                <h4 className="title">Watch Video Now</h4>
                <span className="duration">02:32 minutes</span>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
