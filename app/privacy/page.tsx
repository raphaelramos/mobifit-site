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
            <h2 className="title">Our Privacy Policy</h2>
            <ul className="breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">Privacy Policy</h2>
                <p>
                  Please read this Privacy Policy carefully before using this
                  website
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-between">
            {/* Navigation Menu */}
            <div className="col-lg-4">
              <nav
                className="faq-menu bg_img mb-30"
                style={{ backgroundImage: 'url("/images/faq/faq-menu.png")' }}
              >
                <ul>
                  {[
                    { href: "#get", text: "General" },
                    { href: "#how", text: "Information Collection and Use" },
                    { href: "#third-party-access", text: "Third Party Access" },
                    { href: "#opt-out-rights", text: "Opt-Out Rights" },
                    { href: "#data-retention", text: "Data Retention Policy" },
                    { href: "#security", text: "IP Address" },
                    { href: "#changes", text: "Changes" },
                    { href: "#your-consent", text: "Your Consent" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="nav-link">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Privacy Content */}
            <div className="col-lg-8 col-xl-7">
              <div id="get" className="privacy-item">
                <h3 className="title">General</h3>
                <p>
                  This privacy policy applies to the MobiFit Start app (hereby
                  referred to as &quot;Application&quot;) for mobile devices
                  that was created by MobiFit (hereby referred to as
                  &quot;Service Provider&quot;) as a service. This service is
                  intended for use &quot;AS IS&quot;.
                </p>
              </div>

              <div id="how" className="privacy-item">
                <h3 className="title">Information Collection and Use</h3>
                <p>
                  The Application collects information when you download and use
                  it. This information may include information such as:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Your device&apos;s Internet Protocol address (e.g. IP
                    address)
                  </li>
                  <li>
                    The pages of the Application that you visit, the time and
                    date of your visit, the time spent on those pages
                  </li>
                  <li>The time spent on the Application</li>
                  <li>The operating system you use on your mobile device</li>
                </ul>
                <p className="mt-4">
                  The Application does not gather precise information about the
                  location of your mobile device.
                </p>
                <p className="mt-4">
                  The Service Provider may use the information you provided to
                  contact you from time to time to provide you with important
                  information, required notices and marketing promotions.
                </p>
              </div>

              <div className="privacy-item" id="third-party-access">
                <h3 className="title">Third Party Access</h3>
                <p>
                  Only aggregated, anonymized data is periodically transmitted
                  to external services to aid the Service Provider in improving
                  the Application and their service. The Service Provider may
                  share your information with third parties in the ways that are
                  described in this privacy statement.
                </p>
                <p>
                  Please note that the Application utilizes third-party services
                  that have their own Privacy Policy about handling data. Below
                  are the links to the Privacy Policy of the third-party service
                  providers used by the Application:
                </p>
                <ul className="privacy-item">
                  <li>
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Play Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics for Firebase
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/support/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Firebase Crashlytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/gemini/answer/13594961"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Apps Gemini
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CloudFlare R2
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Supabase
                    </a>
                  </li>
                </ul>
                <p>
                  The Service Provider may disclose User Provided and
                  Automatically Collected Information:
                </p>
                <ul>
                  <li>
                    as required by law, such as to comply with a subpoena, or
                    similar legal process;
                  </li>
                  <li>
                    when they believe in good faith that disclosure is necessary
                    to protect their rights, protect your safety or the safety
                    of others, investigate fraud, or respond to a government
                    request;
                  </li>
                  <li>
                    with their trusted services providers who work on their
                    behalf, do not have an independent use of the information we
                    disclose to them, and have agreed to adhere to the rules set
                    forth in this privacy statement.
                  </li>
                </ul>
              </div>
              <div className="privacy-item" id="opt-out-rights">
                <h3 className="title">Opt-Out Rights</h3>
                <p>
                  You can stop all collection of information by the Application
                  easily by uninstalling it. You may use the standard uninstall
                  processes as may be available as part of your mobile device or
                  via the mobile application marketplace or network.
                </p>
              </div>
              <div className="privacy-item" id="data-retention">
                <h3 className="title">Data Retention Policy</h3>
                <p>
                  The Service Provider will retain User Provided data for as
                  long as you use the Application and for a reasonable time
                  thereafter. If you&apos;d like them to delete User Provided
                  Data that you have provided via the Application, please
                  contact them at compliance@mobifit.app and they will respond
                  in a reasonable time.
                </p>
              </div>
              <div className="privacy-item" id="security">
                <h3 className="title">Security</h3>
                <p>
                  The Service Provider is concerned about safeguarding the
                  confidentiality of your information. The Service Provider
                  provides physical, electronic, and procedural safeguards to
                  protect information the Service Provider processes and
                  maintains.
                </p>
              </div>
              <div className="privacy-item" id="changes">
                <h3 className="title">Changes</h3>
                <p>
                  This Privacy Policy may be updated from time to time for any
                  reason. You are advised to consult this Privacy Policy
                  regularly for any changes, as continued use is deemed approval
                  of all changes.
                </p>
                <p>This Privacy Policy is effective as of 2024-11-02</p>
              </div>

              <div id="your-consent" className="privacy-item">
                <h3 className="title">Your Consent</h3>
                <p>
                  By using the Application, you are consenting to the processing
                  of your information as set forth in this Privacy Policy now
                  and as amended by us.
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
