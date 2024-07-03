import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/tobeto-logo-white.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-100">
          <div className="container">
            <div className="footer-main mb-60">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w1 mb-40">
                    <div className="footer-img">
                      <Link href="/">
                        <Image
                          src={FooterLogo}
                          style={{ width: "200px", height: "auto" }}
                          alt="footer-logo"
                        />
                      </Link>
                      <p>
                      Mükemmel ders fikirleri ve İngilizce öğretmenleri için ders planları! Eğitimciler, dersleri en iyi şekilde bilgiye uygun olarak özelleştirebilir.
                      </p>
                    </div>
                    <div className="footer-icon">
                      <Link href="https://www.instagram.com/tobeto_official/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="https://www.linkedin.com/company/tobeto/" target="_blank">
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w2 mb-40">
                    <h3>Online Platform</h3>
                    <ul>
                      <li>
                        <Link href="/#">Uygun Kurallar</Link>
                      </li>
                      <li>
                        <Link href="/#">Dijital Kütüphane</Link>
                      </li>
                      <li>
                        <Link href="/#">Bizi Karşılaştır</Link>
                      </li>
                      <li>
                        <Link href="/#">Eğitmen Ol</Link>
                      </li>
                      <li>
                        <Link href="/#">Kariyer İnşa Et</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w3 mb-40">
                    <h3>Kurs Ara</h3>
                    <ul>
                      <li>
                        <Link href="/#">Yazılım Geliştirme</Link>
                      </li>
                      <li>
                      <Link href="/#">Spor ve Sağlık</Link>
                      </li>
                      <li>
                      <Link href="/#">Yaşam Stili</Link>
                      </li>
                      <li>
                      <Link href="/#">Fotoğraf</Link>
                      </li>
                      <li>
                      <Link href="/#">İş Analisti</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w4 mb-40">
                    <h3>Topluluk</h3>
                    <ul>
                      <li>
                      <Link href="/#">Küresel Ortaklar</Link>
                      </li>
                      <li>
                      <Link href="/#">Forum</Link>
                      </li>
                      <li>
                      <Link href="/#">Yardım Ve Destek</Link>
                      </li>
                      <li>
                      <Link href="/#">Topluluk</Link>
                      </li>
                      <li>
                      <Link href="/#">Dökümantasyon</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           <CopyrightArea/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
