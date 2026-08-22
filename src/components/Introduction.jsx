import React from "react";
import Typewriter from "typewriter-effect";
import { BsChevronDoubleDown } from "react-icons/bs";

const STATS = [
  { value: "79", label: "JIRA Issues" },
  { value: "66", label: "Pull Requests Merged" },
  { value: "11", label: "Services Explored" },
  { value: "1 Year", label: "Internship Duration" },
];

const Introduction = () => {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <p className="hero__name" id="intro_my_name">
          Qazi Maaz Arshad
        </p>
        <p className="hero__role" id="job_role">
          Software Development Intern
        </p>
        <div className="stat-grid" id="intro_card_box">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="hero__tagline" id="datalife">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 55,
              strings: ["#WHERE DATA AND AI COME TO LIFE"],
            }}
          />
        </p>
        <a className="hero__scroll" href="#contribution" aria-label="Scroll to contributions">
          <BsChevronDoubleDown id="arrow_icon" />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
