import { motion } from "framer-motion";
import { navVariants } from "../../../../utils/motion";
import { useState } from "react";
import menu from "../../../../images/icon-hamburger.svg";
import closeMenu from "../../../../images/icon-close.svg";
import Logo from "../../../../images/logo.svg";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState("ul");

  const navToggle = () => {
    open === "ul" ? setOpen("ul active") : setOpen("ul");
  };

  return (
    <motion.nav
      variants={navVariants}
      initial={"hidden"}
      animate={"show"}
      className="container"
    >
      <img src={Logo} alt="logo" className="logo" />
      <ul className={open}>
        <div className="top-mobile">
          <img src={Logo} alt="logo" className="logo-mobile" />
          <button onClick={navToggle} className="close">
            <img src={closeMenu} alt="close menu icon" />
          </button>
        </div>
        <li>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Support
          </a>
        </li>
      </ul>
      <button onClick={navToggle} className="menu">
        <img src={menu} alt="icon menu" />
      </button>
    </motion.nav>
  );
}
