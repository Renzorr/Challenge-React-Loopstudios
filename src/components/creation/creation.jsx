import "./creation.scss";
import Grid from "./grid/grid";

export default function Creation() {
  return (
    <section className="creation container">
      <div className="top">
        <h3>Our Creations</h3>
        <button className="see-all">See all</button>
      </div>
      <Grid />
      <button className="see-all-mobile">See all</button>
    </section>
  );
}
