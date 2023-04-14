import "../scss/main.scss";
import "../scss/reset.scss";
import Hero from "./components/hero/hero";
import Maincontent from "./components/mainContent/mainContent";
import Creation from "./components/creation/creation";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div>
      <Hero />
      <Maincontent />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
