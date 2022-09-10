import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Team from "./components/Team";

function App() {
  return (
    <Fragment>
      <Header />
      <Slider />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Footer />
    </Fragment>
  );
}

export default App;
