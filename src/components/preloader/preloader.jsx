import "./preloader.scss";
import { gsap } from "gsap";

function Preloader() {
  setInterval(() => {
    reveal();
  }, 300);

  const reveal = () => {
    gsap.to(".blinder", {
      scaleY: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(".blinder-container", {
      onComplete: function () {
        document.querySelector(".blinder-container").style.display = "none";
      },
      delay: 1.9,
    });

    gsap.to("body", {
      overflow: "visible",
      delay: 1.9,
    });
  };

  return (
    <div className="blinder-container">
      <div className="blinder"></div>
      <div className="blinder"></div>
      <div className="blinder"></div>
    </div>
  );
}

export default Preloader;
