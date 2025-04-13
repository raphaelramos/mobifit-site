"use client";

import Link from "next/link";
import Platform from "./platform";

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

          <Platform />

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
