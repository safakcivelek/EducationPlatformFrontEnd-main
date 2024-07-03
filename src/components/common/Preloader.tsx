import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/img/logo/tobeto-logo.png";

const Preloader = () => {
   return (
      <>
         <div id="loading">
            <div id="loading-center">
               <div id="loading-center-absolute">
                  <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                     <Image style={{ width: '250px', height: 'auto' }} src={logo} alt="logo" />
                     <div>
                        <div className="preloader">
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Preloader;
