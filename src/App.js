import React, { Fragment } from "react";
import BackToTop from "react-custom-back-to-top-button";
//Pages
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
      <BackToTop style={{ backgroundColor: "#49cbcd" }} />
    </Fragment>
  );
}

export default App;
