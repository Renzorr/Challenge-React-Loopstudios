import Media from "react-media";
import "./grid.scss";

import Deep from "../../../../images/desktop/image-deep-earth.jpg";
import DeepMobile from "../../../../images/mobile/image-deep-earth.jpg";
import Night from "../../../../images/desktop/image-night-arcade.jpg";
import NightMobile from "../../../../images/mobile/image-night-arcade.jpg";
import Soccer from "../../../../images/desktop/image-soccer-team.jpg";
import SoccerMobile from "../../../../images/mobile/image-soccer-team.jpg";
import GridImg from "../../../../images/desktop/image-grid.jpg";
import GridMobile from "../../../../images/mobile/image-grid.jpg";
import AboveImg from "../../../../images/desktop/image-from-above.jpg";
import AboveMobile from "../../../../images/mobile/image-grid.jpg";
import Pocket from "../../../../images/desktop/image-pocket-borealis.jpg";
import PocketMobile from "../../../../images/mobile/image-pocket-borealis.jpg";
import Curiosity from "../../../../images/desktop/image-curiosity.jpg";
import CuriosityMobile from "../../../../images/mobile/image-curiosity.jpg";
import MakeImg from "../../../../images/desktop/image-fisheye.jpg";
import MakeMobile from "../../../../images/mobile/image-fisheye.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";

const galleryObj = [
  {
    id: 1,
    ImageAddress: Deep,
    ImageAddressMobile: DeepMobile,
    ImageName: "DEEP EARTH",
  },
  {
    id: 2,
    ImageAddress: Night,
    ImageAddressMobile: NightMobile,
    ImageName: "NIGHT ARCADE",
  },
  {
    id: 3,
    ImageAddress: Soccer,
    ImageAddressMobile: SoccerMobile,
    ImageName: "SOCCER TEAM VR",
  },
  {
    id: 4,
    ImageAddress: GridImg,
    ImageAddressMobile: GridMobile,
    ImageName: " THE GRID",
  },
  {
    id: 5,
    ImageAddress: AboveImg,
    ImageAddressMobile: AboveMobile,
    ImageName: "FROM UP ABOVE VR ",
  },
  {
    id: 6,
    ImageAddress: Pocket,
    ImageAddressMobile: PocketMobile,
    ImageName: "POCKET BOREALIS",
  },
  {
    id: 7,
    ImageAddress: Curiosity,
    ImageAddressMobile: CuriosityMobile,
    ImageName: "THE CURIOSITY ",
  },
  {
    id: 8,
    ImageAddress: MakeImg,
    ImageAddressMobile: MakeMobile,
    ImageName: "MAKE IT FISHEYE ",
  },
];

function Desktop() {
  return (
    <div className="grid">
      {galleryObj.map((e) => {
        return (
          <motion.div
            variants={fadeIn("right", "tween", 0, 1)}
            className="cart"
            key={e.id}
          >
            <img src={e.ImageAddress} alt={`${e.ImageName}`} />
            <p className="title">{e.ImageName}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function Mobile() {
  return (
    <div className="grid">
      {galleryObj.map((e) => {
        return (
          <motion.div
            variants={fadeIn("right", "tween", 0, 1)}
            className="cart"
            key={e.id}
          >
            <img src={e.ImageAddressMobile} alt={`${e.ImageName}`} />
            <p className="title">{e.ImageName}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function Grid() {
  return (
    <div>
      <Media queries={{ small: "(max-width: 885px)" }}>
        {(matches) => (matches.small ? <Mobile /> : <Desktop />)}
      </Media>
    </div>
  );
}

export default Grid;
