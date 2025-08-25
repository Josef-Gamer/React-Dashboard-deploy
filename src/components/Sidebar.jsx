import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  // State depends on screen size
  const [expanded, setExpanded] = useState(window.innerWidth > 768);

  const [selected, setSelected] = useState(0);

  const sidebarVariants = {
    true: { left: "0" },
    false: { left: "-60%" },
  };

  // Automatically update if the user resizes the screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setExpanded(true); // Always open on PC
      } else {
        setExpanded(false); // Closed on mobile
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Bars button appears only on mobile */}
      {window.innerWidth <= 768 && (
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          <UilBars />
        </div>
      )}

      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : "true"}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Ou<span>T</span>lets
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}

          {/* signout */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
