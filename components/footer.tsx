import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section
        className="footer-section-16 bg_img padding-top"
        style={{
          backgroundImage: `url('/images/extra/footer/footer-bg.png')`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-6">
              <div className="section-header cl-white">
                <h2 className="title">Comece Agora</h2>
              </div>
            </div>
          </div>

          <ul className="app-download-16">
            <li>
              <a href="https://play.google.com/store/apps/details?id=app.mobifit">
                <Image
                  src="/images/extra/footer/play.png"
                  alt="play"
                  width={170}
                  height={58}
                />
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/us/app/mobifit-start/id6737747199">
                <Image
                  src="/images/extra/footer/app.png"
                  alt="app"
                  width={171}
                  height={59}
                />
              </a>
            </li>
          </ul>

          <div className="footer-bottom padding-top">
            <ul className="footer-link">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="https://www.instagram.com/mobifit.app/">Instagram</a>
              </li>
              <li>
                <a href="privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="copyright border-ash">
            Copyright © {new Date().getFullYear()}. All Rights Reserved By{" "}
            <a href="https://raphaelramos.dev">Raphael Ramos</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
