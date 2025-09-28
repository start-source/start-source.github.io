import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 44,
        title: "Blog Sidebar",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
      {
        id: 49,
        title: "Terms of Service",
        path: "/terms",
        newTab: false,
      },
      {
        id: 50,
        title: "Privacy Policy",
        path: "/privacy-policy",
        newTab: false,
      },
      {
        id: 51,
        title: "Refund Policy",
        path: "/refund-policy",
        newTab: false,
      },
      {
        id: 52,
        title: "Terms of Use",
        path: "/terms-of-use",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
