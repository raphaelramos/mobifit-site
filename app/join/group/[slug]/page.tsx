import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/footer";
import Platform from "@/components/platform";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const t = await getTranslations("join.group");

  const deepLink = `https://mobifit.app/join/group/${slug}`;

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

              <h2 className="title padding-top-2 padding-bottom-2">
                {t("title")}
              </h2>

              <Platform />

              <p className="padding-top-2">
                {t("install")}
              </p>
              <a href={deepLink}>{t("clickToJoin")}</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
