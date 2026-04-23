import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/account/delete-account",
  },
};

const DeleteAccount: React.FC = () => {
  const t = useTranslations("deleteAccount");

  return (
    <>
      {/* Page Header */}
      <section
        className="page-header"
        style={{ backgroundImage: 'url("/images/page-header.png")' }}
      >
        <div className="page-header-shape">
          <Image
            src="/images/page-header.png"
            alt="page header shape"
            width={1920}
            height={100}
          />
        </div>

        <div className="page-left-thumb">
          <Image
            src="/images/bg/privacy-header.png"
            alt="privacy header"
            width={500}
            height={400}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="container">
          <div className="page-header-content text-white">
            <h2 className="title">{t("title")}</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">{t("breadcrumb.home")}</Link>
              </li>
              <li>{t("breadcrumb.current")}</li>
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
                <h2 className="title">Delete with app</h2>
                <p>
                  In the menu at the top right, log in and then click on
                  &quot;Delete Account&quot;.
                </p>
                <h2 className="title">Request deletion without the app</h2>
                <p>
                  Send an email to compliance@mobifit.app using the email
                  address you used to create the account. All data will be
                  permanently deleted.
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

export default DeleteAccount;
