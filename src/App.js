import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./mediaQuery.css";
import Triangle from "./components/Triangle";
import Contributions from "./components/Contributions";
import Learnings from "./components/Learnings";
import Improvement from "./components/Improvement";
import ConsiderMe from "./components/ConsiderMe";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Aos from "aos";
import "aos/dist/aos.css";
import Thankyou from "./components/Thankyou";
import Introduction from "./components/Introduction";
import WeData from "./components/WeData";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Introduction />
      <Contributions />
      <WeData />
      <Triangle />
      <Learnings />
      <Improvement />
      <ConsiderMe />
      <Timeline />
      <Thankyou />
      <Footer />
    </div>
  );
}

export default App;
