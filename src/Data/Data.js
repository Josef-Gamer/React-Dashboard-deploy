// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(135deg, #8e2de2, #4a00e0)", // gradient from purple to dark purple
      boxShadow: "0px 10px 20px 0px rgba(142, 45, 226, 0.5)",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(135deg, #ff416c, #ff4b2b)", // pink to orange
      boxShadow: "0px 10px 20px 0px rgba(212, 157, 170, 0.5)",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(135deg, #f9d423, #ff4e50)", // yellow to red gradient
      boxShadow: "0px 10px 20px 0px rgba(249, 212, 35, 0.5)",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Captien Hans",
    noti: "has ordered Mega-Pack of “No More Seasick” Bracelets.",
    time: "16 seconds ago",
  },
  {
    img: img2,
    name: "Kaymar Gill",
    noti: "has received Waterproof Bagpipes (with Bluetooth)",
    time: "55 minutes ago",
  },
  {
    img: img3,
    name: "Alex Malley",
    noti: "has ordered DIY Submarine Repair Kit for Kids (Ages 6+)",
    time: "12 hours ago",
  },
];
