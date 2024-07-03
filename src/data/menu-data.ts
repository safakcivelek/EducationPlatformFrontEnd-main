interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const mobile_menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Anasayfa",
    link: "/",
    submenus: [
      { title: "Anasayfa", link: "/" },
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    active: true,
    title: "Kurslar",
    link: "/course",
    submenus: [
      { title: "Kurslar", link: "/course" },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    title: "Eğitmenler",
    link: "/instructor",
    submenus: [
      { title: "Eğitmenler", link: "/instructor" },
    ],
  },
    {
        id: 4,
        hasDropdown: true,
        active: true,
        title: "İletişim",
        link: "/contact",
        submenus: [
            { title: "İletişim", link: "/contact" },
        ],
    },
];

export default mobile_menu_data;
