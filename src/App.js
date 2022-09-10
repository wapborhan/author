import { Fragment } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
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
    </Fragment>
  );
}

export default App;
