import React from "react";
import sunil from "../assets/sunil.png";
import fun_friday from "../assets/fun_friday.png";
import jenkins from "../assets/jenkins.png";
import kt from "../assets/kt.png";
import shm_kt from "../assets/shm_kt.png";

const MOMENTS = [
  {
    title: "Worked during the company holidays",
    highlight: "Customer First Approach",
    image: sunil,
    alt: "Working through a company holiday for a customer",
  },
  {
    title: "Delivered a KT session on",
    highlight: "Spring Boot Basics",
    image: kt,
    alt: "Knowledge transfer session on Spring Boot",
  },
  {
    title: "Maintained dev subpods",
    highlight: "Subpod Maintenance",
    image: jenkins,
    alt: "Jenkins subpod maintenance",
  },
  {
    title: "Facilitated an enablement session on",
    highlight: "SHM UI",
    image: shm_kt,
    alt: "SHM UI enablement session",
  },
  {
    title: "Organized a team bonding activity",
    highlight: "Fun Friday",
    image: fun_friday,
    alt: "Fun Friday team activity",
  },
];

const Extras = () => {
  return (
    <section className="section" id="extras">
      <div className="wrap">
        <h2 className="my_heading">
          A little <span>Extra</span>
        </h2>
        <div className="timeline">
          {MOMENTS.map((moment, index) => (
            <article
              className={`timeline-card${index % 2 === 0 ? " is-odd" : " is-even"}`}
              key={moment.highlight}
            >
              <div className="timeline-card__body">
                <h3>
                  {moment.title} <span>{moment.highlight}</span>
                </h3>
                <img src={moment.image} alt={moment.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;
