import React from "react";
import Link from "next/link";
import LogoBlack from "../../../public/assets/img/logo/logo-black.png";
import Image from "next/image";
import abstroeImg from "../../../public/assets/img/bg/appstore-1.png";

const FooterTwo = () => {
  return (
    <footer>
      <div className="university-footer-area pt-100 pb-60">
        <div className="footer">
          <div className="container">
            <div className="footer-main">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w1 mb-40">
                    <div className="footer-widget-head">
                      <div className="footer-logo mb-30">
                        <Link href="/">
                          <Image
                            src={LogoBlack}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="university-footer-widget-body">
                      <p className="mb-30">
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lessons as best plans to
                        knowledge.
                      </p>

                      <div className="university-footer-icon">
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://vimeo.com/">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.linkedin.com">
                              {" "}
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w2 mb-40">
                    <div className="university-footer-widget-head mb-35">
                      <h4 className="university-footer-widget-title">
                        Online Platform
                      </h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-link">
                        <ul>
                          <li>
                            <Link href="/course">Proper Guidelines</Link>
                          </li>
                          <li>
                            <Link href="/course">Digital Library</Link>
                          </li>
                          <li>
                            <Link href="/course">Compare Us</Link>
                          </li>
                          <li>
                            <Link href="/become-instructor">
                              Become Instructor
                            </Link>
                          </li>
                          <li>
                            <Link href="/become-instructor">Build Career</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w3 mb-40">
                    <div className="university-footer-widget-head mb-35">
                      <h4 className="university-footer-widget-title">
                        Kurslarda ara
                      </h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-link">
                        <ul>
                          <li>
                            <Link href="/course">Development</Link>
                          </li>
                          <li>
                            <Link href="/course">Business</Link>
                          </li>
                          <li>
                            <Link href="/course">Health and Fitness</Link>
                          </li>
                          <li>
                            <Link href="/course">Life Styles</Link>
                          </li>
                          <li>
                            <Link href="/course">Photography</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w4 mb-40">
                    <div className="footer-widget-head mb-35">
                      <h4 className="footer-widget-title">Newsletter</h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-subscribe">
                        <form action="#">
                          <div className="university-footer-subscribe position-relative mb-35">
                            <div className="field po">
                              <input type="email" placeholder="Enter email" />
                            </div>
                            <button type="submit">
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <h3>Download App</h3>
                      <div className="app-store">
                        <Link href="/">
                          <Image
                            src={abstroeImg}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                        <Link href="/">
                          <Image
                            src={abstroeImg}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="university-sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="sub-footer-text">
                <span>
                  © Copyrighted and Designed by{" "}
                  <a href="https://themeforest.net/user/bdevs">BDevs</a>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="sub-footer-link">
                <ul>
                  <li>
                    <Link href="/policy-privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms and Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
