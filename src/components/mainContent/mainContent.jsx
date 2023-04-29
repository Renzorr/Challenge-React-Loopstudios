import Img from "../../../images/desktop/image-interactive.jpg";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../../utils/motion";
import "./mainContent.scss";

export default function Maincontent() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container"
    >
      <motion.img
        variants={fadeIn("down", "tween", 0.2, 1)}
        src={Img}
        alt="a man wearing vr head"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="main-content"
      >
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </motion.div>
    </motion.main>
  );
}
