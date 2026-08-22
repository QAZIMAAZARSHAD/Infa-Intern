import React from "react";
import hard_work from "../assets/hard_work.png";
import problem_solver from "../assets/problem_solver.png";
import prompt from "../assets/prompt.png";
import team from "../assets/team.png";

const STRENGTHS = [
  {
    title: "Team Player",
    image: team,
    text: "I thrive on collaboration and believe in the power of collective effort. I communicate clearly, listen actively, and offer constructive feedback.",
  },
  {
    title: "Problem Solver",
    image: problem_solver,
    text: "I think critically and imaginatively to devise solutions that optimize performance, enhance user experience, and drive innovation.",
  },
  {
    title: "Prompt",
    image: prompt,
    text: "I treat deadlines with respect and approach every task with urgency and purpose, delivering work on time.",
  },
  {
    title: "Hard Working",
    image: hard_work,
    text: "I consistently go beyond the minimum, taking on challenges that stretch my skills and raise the quality of the work.",
  },
];

const Strengths = () => {
  return (
    <section className="section strengths" id="strengths">
      <div className="wrap">
        <h2 className="my_heading my_heading--light">
          My <span>Strengths</span>
        </h2>
        <div className="strength-grid">
          {STRENGTHS.map((item) => (
            <article className="strength-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <img src={item.image} alt="" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
