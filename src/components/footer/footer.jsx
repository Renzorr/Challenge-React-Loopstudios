import { motion } from "framer-motion";
import { footerVariants } from "../../../utils/motion";

import Logo from "../../../images/logo.svg";
import "./footer.scss";
import Facebook from "../../../images/icon-facebook.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import Instagram from "../../../images/icon-instagram.svg";
import Twitter from "../../../images/icon-twitter.svg";

const socialObj = [
  {
    id: 1,
    Image: Facebook,
    ImageName: "facebook",
  },
  {
    id: 2,
    Image: Twitter,
    ImageName: "twitter",
  },
  {
    id: 3,
    Image: Pinterest,
    ImageName: "pinterest",
  },
  {
    id: 4,
    Image: Instagram,
    ImageName: "instagram",
  },
];

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial={"hidden"}
      whileInView={"show"}
    >
      <div className="container footer-container">
        <div className="left">
          <img src={Logo} alt="logo" />
          <ul>
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
        </div>
        <div className="right">
          <ul>
            {socialObj.map((e) => {
              return (
                <li key={e.id}>
                  <a href="#">
                    <img src={e.Image} alt={`${e.ImageName}`} />
                  </a>
                </li>
              );
            })}
          </ul>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
