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
    <nav className="container">
      <img src={Logo} alt="logo"  className="logo"/>
      <ul className={open}>
        <button onClick={navToggle} className="close">
          <img src={closeMenu} alt="close menu icon" />
        </button>
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
    </nav>
  );
}
