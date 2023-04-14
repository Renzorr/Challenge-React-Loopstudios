import Img from "../../../images/desktop/image-interactive.jpg";
import "./mainContent.scss";

export default function Maincontent() {
  return (
    <main className="container">
      <img src={Img} alt="a man wearing vr head" />

      <div className="main-content">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </main>
  );
}
