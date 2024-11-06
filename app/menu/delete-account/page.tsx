import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section
        className="section page-header bg-cover relative"
        style={{ backgroundImage: 'url("/images/page-header.png")' }}
      >
        <div className="bottom-shape hidden md:block">
          <Image
            src="/css/img/page-header.png"
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
          />
        </div>

        <div className="container">
          <div className="page-header-content text-white">
            <h2 className="title">Delete Account</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Delete Account</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header">
                <h2 className="title">Delete via the app</h2>
                <p>
                In the menu at the top right, log in and then click on &quot;Delete Account&quot;.
                </p>
                <h2 className="title">Request deletion without the app</h2>
                <p>
                Send an email to compliance@mobifit.app using the email address you used to create the account. All data will be permanently deleted.
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

export default PrivacyPolicy;
