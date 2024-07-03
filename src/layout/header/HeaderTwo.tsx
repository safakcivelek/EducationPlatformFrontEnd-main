import React, { useContext, useState } from "react";
import Link from "next/link";
import HeaderCartIcon from "@/svg/HeaderCartIcon";
import Image from "next/image";
import LogoBlackImage from "../../../public/assets/img/logo/logo-black.png";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Menu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import MobileMenu from "./components/MobileMenu";
import { AppContextType } from "@/interFace/interFace";

const HeaderTwo = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  const [cartOpen, setCartOpen] = useState(false);
  const [signinOpen, setSignInOpen] = useState(false);
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));
  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      <header>
        <div className="header-top-area d-none d-lg-block">
          <div className="container-fluid">
            <div className="header-top-inner">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <div className="header-top-icon">
                    <Link href="tel:(555)674890556">
                      <i className="fas fa-phone-alt"></i>(555) 674 890 556
                    </Link>
                    <Link href="mailto:info@example.com">
                      <i className="fal fa-envelope"></i>info@example.com
                    </Link>
                    <i className="fal fa-map-marker-alt"></i>
                    <span>3rd Avenue, San Francisco</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="header-top-login d-flex f-right">
                    <div className="header-social">
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
        </div>

        <div
          className={`header-area-2 sticky-header ${
            scrollDirection === "down" ? "sticky" : " "
          }`}
        >
          <div className="container-fluid">
            <div className="header-main-wrapper">
              <div className="row align-items-center">
                <div className="col-3 col-lg-3 col-md-3 col-sm-9 col-9">
                  <div className="header-logo">
                    <Link href="/">
                      {" "}
                      <Image
                        src={LogoBlackImage}
                        style={{ width: "auto", height: "auto" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-3 col-3">
                  <div className="header-main-right  d-flex justify-content-end">
                    <div className="main-menu mr-30 d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <Menu />
                        </ul>
                      </nav>
                    </div>
                    <div className="header-btn">
                      <div className="cart-wrapper mr-45">
                        <button
                          className="cart-toggle-btn"
                          onClick={() => {
                            setCartOpen(!cartOpen);
                          }}
                        >
                          <div className="header__cart-icon p-relative">
                            <HeaderCartIcon />
                            <span className="item-number">
                              {" "}
                              {quantityProduct}{" "}
                            </span>
                          </div>
                        </button>
                      </div>
                      <Link
                        href="/registration"
                        className="edu-four-btn d-none d-lg-block"
                      >
                        Enroll now
                      </Link>
                      <div className="menu-bar ml-20">
                        <button
                          onClick={toggleSideMenu}
                          className="side-toggle header-2"
                        >
                          <span className="bar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
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
        <MobileMenu />
        <div
          onClick={toggleSideMenu}
          className={
            sideMenuOpen
              ? "offcanvas-overlay overlay-signin"
              : "offcanvas-overlay"
          }
        ></div>
      </header>
    </>
  );
};

export default HeaderTwo;
