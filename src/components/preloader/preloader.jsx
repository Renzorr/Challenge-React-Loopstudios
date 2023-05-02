import "./preloader.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

function Preloader() {
  useEffect(() => {
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
        delay: 1.2,
      });
    };

    reveal();
  }, []);

  return (
    <div className="blinder-container">
      <div className="blinder"></div>
      <div className="blinder"></div>
      <div className="blinder"></div>
    </div>
  );
}

export default Preloader;
