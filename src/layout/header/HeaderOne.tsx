"use client";
import React, { useContext, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "../../../public/assets/img/logo/tobeto-logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import HeaderIcon from "@/svg/header-icon";
import Menu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./components/MobileMenu";
import DropdownCategory from "./components/DropdownCategory";
import ProfileDropdown from "@/components/profileDropdown/ProfileDropdown";
import { parseJwt } from "@/utils/parseJWT";
import SignUpDropdown from "@/components/signUpDropdown/SignUpDropdown";
import { useTokenUser } from "@/hooks/userHook/tokenUser";
import { useRouter } from "next/navigation";



const HeaderOne = () => {
    const scrollDirection = useScrollDirection(null);
    const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType
    const [cartOpen, setCartOpen] = useState(false);

    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchInputRef.current) {
            const searchTerm = searchInputRef.current.value;

            if (searchTerm.trim()) {
                const href = `/search/${encodeURIComponent(searchTerm)}`;
                router.push(href); 
            }
        }
    };

    const { userName } = useTokenUser();

    // redux import
    const dispatch = useDispatch();
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const uniqueProductIds = new Set();
    cartProducts.forEach((product: any) => uniqueProductIds.add(product.id));

    const quantityProduct = uniqueProductIds.size;



    return (
        <>
            <header>
                <div className={`sticky header-area header-transparent ${scrollDirection === "down" ? "sticky-header" : ""}`}>
                    <div className="container-fluid">
                        <div className="header-main-wrapper">
                            <div className="row align-items-center">
                                {/* Sol taraf veya logo kısmı */}
                                <div className="col-xl-7 col-lg-7 col-md-5 col-sm-9 col-9">
                                    <div className="header-left d-flex align-items-center">
                                        <div className="header-logo">
                                            <Link href="/">
                                                <Image
                                                    style={{ width: "100%", height: "auto" }}
                                                    src={LogoBlack}
                                                    alt="logo"
                                                />
                                            </Link>
                                        </div>
                                        <div className="category-menu category-menu-responsive d-none d-md-block">
                                            <div className="Category-click">
                                                <figure className="cattext">
                                                    <HeaderIcon />
                                                    <span className="text">Kategoriler</span>
                                                </figure>
                                                <DropdownCategory />
                                            </div>
                                        </div>
                                        <div className="main-menu d-none d-xl-block">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <Menu />
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                                {/* Sağ taraf veya kullanıcı işlemleri kısmı */}
                                <div className="col-xl-5 col-lg-5 col-md-7 col-sm-3 col-3">
                                    <div className="header-right d-flex align-items-center justify-content-end">
                                        <div className="header-search d-none d-xxl-block mr-30">
                                            <form onSubmit={handleSearchSubmit}>
                                                <div className="search-icon p-relative">
                                                    <input type="text" ref={searchInputRef} placeholder="Kurs Ara" />
                                                    <button type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        {userName ? (
                                            <>
                                                <ProfileDropdown userName={userName} />
                                            </>
                                        ) : (
                                            <>
                                                <div className="user-btn-inner p-relative d-none d-md-block">
                                                    <div className="user-btn-wrapper">
                                                        <div className="user-btn-content">
                                                            <Link href="/login" className="user-btn-sign-in mobile-login-hide">
                                                                Giriş Yap
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block">
                                                    {/* Üye Ol Butonu */}
                                                    <SignUpDropdown />
                                                </div>
                                            </>
                                        )}
                                        {/* Mobil menü butonu */}
                                        <div className="menu-bar d-xl-none ml-20">
                                            <button onClick={toggleSideMenu} className="side-toggle">
                                                <div className="bar-icon">
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
                {/* Header altındaki diğer bileşenler (örneğin, sepet) */}
                <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
            </header>
            <MobileMenu />
            <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>
        </>
    );
};

export default HeaderOne;