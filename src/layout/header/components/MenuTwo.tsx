
import mobile_menu_data from '@/data/menu-data';
import Link from 'next/link';
import React, { useState } from 'react';

const MenuTwo = () => {
    const [submenuOpen, setSubmenuOpen] = useState<number>(0) 
    const [open, setOpen] = useState<boolean>(false) 
    const [open2, setopen2] = useState<boolean>(false);
    const [menuNum2, setmenuNum2] = useState<number>(0);
    const handleMenuToggle = (id:number) =>{
        setSubmenuOpen(id)
        setOpen(!open)
    }

    const handleOpenMegaMenu = (id:number) => {
        setmenuNum2(id)
        setopen2(!open2)
      
      };

    return (
        <>
            {mobile_menu_data?.length &&
        mobile_menu_data?.map((item) => (
          <li onClick={()=> handleMenuToggle(item.id)} key={item.id} className={`${submenuOpen === item.id && open ? "has-droupdown active" : "has-droupdown"}`}>
            <Link href={""}> {item.title} </Link>
            {item.hasDropdown === true && (
              <ul className={`${submenuOpen === item.id && open ? "sub-menu active" : "sub-menu"}`}>
                {item?.submenus?.length &&
                  item?.submenus.map((data, index) => (
                    <li key={index}>
                      <Link href={data.link}> {data.title} </Link>
                    </li>
                  ))}
              </ul>
            )}
          
          </li>
        ))}
        </>
    );
};

export default MenuTwo;