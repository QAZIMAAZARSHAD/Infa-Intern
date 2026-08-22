import React from "react";
import { FaRocket, FaToolbox, FaAward } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCsswizardry,
  SiJavascript,
  SiSpringboot,
  SiPostman,
  SiEclipseide,
  SiJira,
  SiJenkins,
  SiBitbucket,
  SiTypescript,
  SiTestcafe,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BiCodeCurly } from "react-icons/bi";
import { VscDebugConsole } from "react-icons/vsc";

const GROUPS = [
  {
    title: "Technologies",
    icon: <FaRocket />,
    skills: [
      { icon: <GrReactjs />, label: "React.js" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <AiFillHtml5 />, label: "HTML" },
      { icon: <SiCsswizardry />, label: "CSS" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <DiJava />, label: "Java" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
    ],
  },
  {
    title: "Tools",
    icon: <FaToolbox />,
    skills: [
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiVisualstudiocode />, label: "Visual Studio Code" },
      { icon: <SiEclipseide />, label: "Eclipse" },
      { icon: <SiJira />, label: "JIRA" },
      { icon: <SiBitbucket />, label: "Bitbucket" },
      { icon: <SiJenkins />, label: "Jenkins" },
    ],
  },
  {
    title: "Other Skills",
    icon: <FaAward />,
    skills: [
      { icon: <VscDebugConsole />, label: "Debugging" },
      { icon: <BiCodeCurly />, label: "Good Coding Practices" },
      { icon: <SiTestcafe />, label: "Testing Procedures" },
    ],
  },
];

const Learnings = () => {
  return (
    <section className="section" id="learnings">
      <div className="wrap">
        <h2 className="my_heading">
          My <span>Learnings</span> at Informatica
        </h2>
        {GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>
              {group.icon} {group.title}
            </h3>
            <div className="skill-grid">
              {group.skills.map((skill) => (
                <div className="skill-chip" key={skill.label}>
                  <span className="skill-chip__icon">{skill.icon}</span>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learnings;
