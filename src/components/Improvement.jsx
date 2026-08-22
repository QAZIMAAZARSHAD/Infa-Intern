import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { SiReact, SiSpringboot } from "react-icons/si";
import Triangle from "./Triangle";

const AREAS = [
  { icon: <BiCodeAlt />, text: "Good coding practices" },
  { icon: <SiReact />, text: "Advanced concepts of React.js" },
  { icon: <SiSpringboot />, text: "Advanced concepts of Spring Boot" },
];

const Improvement = () => {
  return (
    <section>
      <div className="section section--muted" id="improvement">
        <div className="wrap">
          <h2 className="my_heading">
            Where I Need To <span>Improve</span>
          </h2>
          <div className="improve-grid">
            {AREAS.map((area) => (
              <article className="improve-card" key={area.text}>
                <h3>{area.icon}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Improvement;
