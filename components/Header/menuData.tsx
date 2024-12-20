import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about-us",
  },

  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Programs",
    newTab: false,
    path: "/programs",
    submenu: [
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "#newsletter",
      }
    ],
  },
  {
    id: 2.1,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
