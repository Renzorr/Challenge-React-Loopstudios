import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../../../utils/motion";
import "./creation.scss";
import Grid from "./grid/grid";

export default function Creation() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="creation container"
    >
      <div className="top">
        <motion.h3
          variants={textVariant(0.4)}
          initial={"hidden"}
          whileInView="show"
        >
          Our Creations
        </motion.h3>
        <motion.button
          variants={fadeIn("down", "tween", 0, 1)}
          className="see-all"
        >
          See all
        </motion.button>
      </div>
      <Grid></Grid>
      <motion.button
        variants={fadeIn("down", "tween", 0, 1)}
        className="see-all-mobile"
      >
        See all
      </motion.button>
    </motion.section>
  );
}
