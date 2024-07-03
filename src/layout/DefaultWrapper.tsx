//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import Footer from "./footer/Footer";
import HeaderOne from "./header/HeaderOne";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";

import FooterTwo from "./footer/footerTwo";


interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 2500);
  }, []);

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/":
            return<HeaderOne />
          default: 
           return <HeaderOne />;
        }
      })()}
      {children}
      {(() => {
        switch (pathName) {
          default:
            return <Footer />;
          case "/homeThree":
            return <FooterTwo />;
        }
      })()}
    </>
  );
};

export default Wrapper;
