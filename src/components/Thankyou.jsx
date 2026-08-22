import React from "react";
import thankyou from "../assets/thank_you.gif";

const Thankyou = () => {
  return (
    <section className="thankyou" id="thankyou">
      <img src={thankyou} alt="Thank you" loading="lazy" />
    </section>
  );
};

export default Thankyou;
