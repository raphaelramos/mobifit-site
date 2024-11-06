import Image from "next/image";
import Footer from "@/components/footer";
import Platform from "@/components/platform";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const deepLink = `mobifit://groups/join/${slug}`;

  return (
    <>
      <div className="container padding-top-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              <Image
                src="/images/logo-white.png"
                alt="banner"
                width={120}
                height={120}
              />

              <h2 className="title padding-top-2">
                Você foi convidado para um grupo
              </h2>

              <Platform />

              <p>Instale o aplicativo MobiFit e depois</p>
              <a href={deepLink}>Clique aqui para entrar</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
