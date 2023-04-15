import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";
import "./title.scss";
export default function Title() {
  return (
    <motion.div
      variants={fadeIn("right", "spring", .2, 3)}
      initial={"hidden"}
      whileInView={"show"}
      className="container"
    >
      <article>
        <h1>Immersive experiences that deliver</h1>
      </article>
    </motion.div>
  );
}
