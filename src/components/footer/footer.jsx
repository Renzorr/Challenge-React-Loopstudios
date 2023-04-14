import Logo from "../../../images/logo.svg";
import "./footer.scss";
const socialObj = [
  {
    id: 1,
    Image: "../../../../images/icon-facebook.svg",
    ImageName: "facebook",
  },
  {
    id: 2,
    Image: "../../../../images/icon-twitter.svg",
    ImageName: "twitter",
  },
  {
    id: 3,
    Image: "../../../../images/icon-pinterest.svg",
    ImageName: "pinterest",
  },
  {
    id: 4,
    Image: "../../../../images/icon-instagram.svg",
    ImageName: "instagram",
  },
];

export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
