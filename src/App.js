import { Fragment } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Slider from "./components/Slider";

function App() {
  return (
    <Fragment>
      <Header />
      <Slider />
      <Services />
      <Portfolio />
    </Fragment>
  );
}

export default App;
