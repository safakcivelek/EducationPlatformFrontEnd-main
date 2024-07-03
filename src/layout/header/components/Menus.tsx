import menu_data from '@/data/menu-data';
import Link from 'next/link';
import React from 'react';

const Menus = () => {
    return (
        <ul className="navigation">
            {menu_data.map((menu, i) => (
                <li
                    key={i}
                    className={` ${menu.hasDropdown ? "menu-item-has-children" : ""} ${menu.hasDropdown ? "menu-item-has-children" : ""}`}
                >
                    <Link href={menu.link}>{menu.title}</Link>
                    {menu.hasDropdown && (
                        <ul className="sub-menu">
                            {menu.submenus && menu.submenus.map((sub:any, i:any) => (
                                <li key={i}>
                                    <Link href={sub.link}>{sub.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menus;