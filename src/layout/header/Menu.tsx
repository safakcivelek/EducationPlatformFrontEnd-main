import menu_data from "@/data/menu-data-two";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

const Menu = () => {
    const pathname = usePathname();

    return (
        <ul>
            {menu_data?.length > 0 &&
                menu_data.map((item) => {
                    // Aktif menü öğesi için kontrol
                    const isActive = pathname === item.link;

                    return (
                        <li key={item.id} className={isActive ? 'active' : ''}>
                            <Link href={item.link}>
                                <div className={`link ${isActive ? 'active' : ''}`}>{item.title}</div>
                            </Link>
                            {item.hasDropdown && item.submenus?.length > 0 && (
                                <ul className="sub-menu">
                                    {item.submenus.map((submenuItem, index) => {
                                        // Alt menü öğeleri için aktif kontrolü
                                        const isSubmenuActive = pathname === submenuItem.link;
                                        return (
                                            <li key={index} className={isSubmenuActive ? 'active' : ''}>
                                                <Link href={submenuItem.link}>
                                                    <div className={`link ${isSubmenuActive ? 'active' : ''}`}>{submenuItem.title}</div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            {item.megaMenu && item.mega_menus?.length > 0 && (
                                <ul className="sub-menu">
                                    {item.mega_menus.map((megaMenuItem, index) => {
                                        // Mega menü öğeleri için aktif kontrolü
                                        const isMegaMenuActive = pathname === megaMenuItem.link;
                                        return (
                                            <li key={index} className={isMegaMenuActive ? 'active' : ''}>
                                                <Link href={megaMenuItem.link}>
                                                    <div className={`link ${isMegaMenuActive ? 'active' : ''}`}>{megaMenuItem.title}</div>
                                                </Link>
                                                {megaMenuItem.hasDropdown && megaMenuItem.submenus?.length > 0 && (
                                                    <ul className="sub-menu">
                                                        {megaMenuItem.submenus.map((subMenuItem, indx) => {
                                                            // Mega menü içindeki alt menü öğeleri için aktif kontrolü
                                                            const isSubMenuItemActive = pathname === subMenuItem.link;
                                                            return (
                                                                <li key={indx} className={isSubMenuItemActive ? 'active' : ''}>
                                                                    <Link href={subMenuItem.link}>
                                                                        <div className={`link ${isSubMenuItemActive ? 'active' : ''}`}>{subMenuItem.title}</div>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
        </ul>
    );
};

export default Menu;