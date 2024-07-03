"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@/contextApi/AppProvider';

import MenuTwo from './MenuTwo';
import LogoBlack from '../../../../public/assets/img/logo/logo-black.png';
import logo from "../../../../public/assets/img/logo/tobeto-logo.png";
import Image from 'next/image';
import MobileProfileDropdown from '@/components/profileDropdown/MobileDropdown';
import { parseJwt } from '@/utils/parseJWT';
import { useTokenUser } from '@/hooks/userHook/tokenUser';
import { AppContextType } from '../../../interFace/interFace';


const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType

  const { userName } = useTokenUser();

  return (
    <div className="fix">
      <div className={sideMenuOpen ? "side-info info-open" : "side-info"}>
        <div className="row align-items-center mb-30">
          <div className="col-9">
            <Link href="/"><Image src={logo} style={{ width: "175px", height: "auto" }} alt="Logo" /></Link>
          </div>
          <div className="col-3 text-end"><button className="side-info-close" onClick={toggleSideMenu}><i className="fal fa-times"></i></button>
          </div>
        </div>
        <div className="side-info-content">
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              {userName ? (<MobileProfileDropdown userName={userName} />)
                : <div className="d-flex justify-content-between mt-2 mb-3 ml-5 .d-sm-none">
                  <div style={{ marginRight: '8px' }}>
                     <Link href="/login" className="btn-giris-mobil edu-btn m0-4">
                      Giriş
                    </Link>
                  </div>
                  <div>
                     <Link href="/student-registration" className="btn-kayit-mobil edu-btn">
                      Kayıt
                    </Link>
                  </div>
                </div>}

              <MenuTwo />

            </ul>

          </div>


        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
