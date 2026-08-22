import React from "react";
import wedata from "../assets/wedata.gif";

const WeData = () => {
  return (
    <section className="section we-data" id="lot_more_box">
      <div className="wrap we-data__grid">
        <div className="we-data__copy">
          <p>But that's</p>
          <p>
            Not <span>it</span>
          </p>
        </div>
        <div className="we-data__media">
          <img src={wedata} alt="Informatica WeData animation" />
        </div>
      </div>
    </section>
  );
};

export default WeData;
