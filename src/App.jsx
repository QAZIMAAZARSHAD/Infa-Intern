import React from "react";
import "./App.css";
import Header from "./components/Header";
import Triangle from "./components/Triangle";
import Contributions from "./components/Contributions";
import Learnings from "./components/Learnings";
import Improvement from "./components/Improvement";
import Strengths from "./components/Strengths";
import Footer from "./components/Footer";
import Extras from "./components/Extras";
import Thankyou from "./components/Thankyou";
import Introduction from "./components/Introduction";
import WeData from "./components/WeData";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Contributions />
      <WeData />
      <Triangle />
      <Learnings />
      <Improvement />
      <Strengths />
      <Extras />
      <Thankyou />
      <Footer />
    </div>
  );
}

export default App;
