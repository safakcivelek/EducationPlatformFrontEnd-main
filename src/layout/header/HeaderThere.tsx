import React, { useContext, useState } from "react";
import Link from "next/link";
import LogoWhiteImg from "../../../public/assets/img/logo/logo-white.png";
import LogoBlackImg from "../../../public/assets/img/logo/logo-black.png";
import Image from "next/image";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import Menu from "./Menu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import MobileMenu from "./components/MobileMenu";

const HeaderThree = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div className="university-header-wrapper">
          <div className="header-university-top-area d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="header-left">
                    <Link href="tel:(555)674890556">
                      <i className="fas fa-phone-alt"></i>(555) 674 890 556
                    </Link>
                    <Link href="mailto:info@example.com">
                      <i className="fal fa-envelope"></i>info@example.com
                    </Link>
                    <span>3rd Avenue, San Francisco</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="header-right f-right">
                    <div className="header-right-icon">
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="https://www.linkedin.com" target="_blank">
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={` header-main3 transpaerent-header sticky-header ${
              scrollDirection === "down" ? "sticky" : ""
            }`}
          >
            <div className="container">
              <div className="header-main-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3">
                    <div className="header-logo">
                      <Link href="/">
                        <Image
                          className="logo-white"
                          style={{ width: "auto", height: "auto" }}
                          src={LogoWhiteImg}
                          alt="logo"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          className="logo-black"
                          style={{ width: "auto", height: "auto" }}
                          src={LogoBlackImg}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9">
                    <div className="header-main-right d-flex justify-content-end">
                      <div className="main-menu mr-30 d-none d-xl-block">
                        <nav id="mobile-menu">
                        <ul>
                          <Menu/>
                        </ul>
                        </nav>
                      </div>
                      <div className="header-btn">
                        <div className="cart-wrapper mr-45">
                          <Link
                            href="#!"
                            className="cart-toggle-btn"
                            onClick={() => {
                              setCartOpen(!cartOpen);
                            }}
                          >
                            <div className="header__cart-icon p-relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19.988"
                                height="19.988"
                                viewBox="0 0 19.988 19.988"
                              >
                                <g
                                  id="trolley-cart"
                                  transform="translate(-1 -1)"
                                >
                                  <path
                                    id="Path_36"
                                    data-name="Path 36"
                                    d="M1.666,2.333H3.8L6.159,12.344a1.993,1.993,0,0,0,.171,3.98H17.656a.666.666,0,1,0,0-1.333H6.33a.666.666,0,0,1,0-1.333H17.578a1.992,1.992,0,0,0,1.945-1.541l1.412-6a2,2,0,0,0-1.946-2.456H5.486L4.98,1.514A.666.666,0,0,0,4.331,1H1.666a.666.666,0,0,0,0,1.333ZM18.989,5a.677.677,0,0,1,.649.819l-1.412,6a.662.662,0,0,1-.648.514H7.524L5.8,5Z"
                                    transform="translate(0 0)"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_37"
                                    data-name="Path 37"
                                    d="M20,27a2,2,0,1,0,2-2A2,2,0,0,0,20,27Zm2.665,0A.666.666,0,1,1,22,26.333.666.666,0,0,1,22.665,27Z"
                                    transform="translate(-6.341 -8.01)"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_38"
                                    data-name="Path 38"
                                    d="M9,27a2,2,0,1,0,2-2A2,2,0,0,0,9,27Zm2.665,0A.666.666,0,1,1,11,26.333.666.666,0,0,1,11.665,27Z"
                                    transform="translate(-2.67 -8.01)"
                                    fill="#fff"
                                  />
                                </g>
                              </svg>
                              <span className="item-number">3</span>
                            </div>
                          </Link>
                        </div>
                        <Link href="/registration"
                          className="edu-thard-btn d-none d-lg-block"
                        >
                          Enroll now
                        </Link>
                        <div className="menu-bar ml-20">
                          <button onClick={toggleSideMenu}
                            className="side-toggle header-3"
                          >
                            <div className="bar-icon header-3">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <div
          onClick={() => setCartOpen(false)}
          className={cartOpen ? "body-overlay opened" : "body-overlay"}
        ></div>
        <MobileMenu/>
            <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>
      </header>
    </>
  );
};

export default HeaderThree;
