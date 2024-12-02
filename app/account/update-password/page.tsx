import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const UpdatePassword: React.FC = () => {
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
            <h2 className="title">Trocar Senha</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Trocar Senha</li>
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
                <p>
                  Você deve acessar esse link em um dispositivo com o MobiFit
                  instalado.
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

export default UpdatePassword;
