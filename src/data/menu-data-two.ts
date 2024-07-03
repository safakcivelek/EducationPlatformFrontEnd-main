interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  megaMenu?: boolean;
  pages?: boolean;
  mega_menus?: any[]; 
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Anasayfa",
    pluseIncon: true,
    link: "/",
   
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Kurslar",
    link: "/course",
    pluseIncon: true,
    submenus: [
      { title: "Kurs ", link: "/course" },
   

    ],
  },
  {
    id: 3,
    title: "Eğitmenler",
    megaMenu: false,
    link: "/instructor",
    pluseIncon: true,
    pages: true,
    
    },
    {
        id: 4,
        title: "İletişim",
        megaMenu: false,
        link: "/contact",
        pluseIncon: true,
        pages: true,

    },
  
];

export default menu_data;
