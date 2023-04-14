import Navbar from "./navbar/navbar";
import Title from "./title/title";
import "./hero.scss";
export default function Hero() {
  return (
    <div className="bg-img">
      <Navbar />
      <Title />
    </div>
  );
}
