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
import Typewriter from "typewriter-effect";

const Learnings = () => {
    return (
        <div className="mb-5" id="learnings">
            <p className="my_heading" data-aos="fade-up">
                My{" "}
                <span className="d-inline-block">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: ["Learnings"],
                        }}
                    />
                </span>{" "}
                at Informatica
            </p>
            <div className="container">
                <div className="row" style={{ marginTop: "40px" }}>
                    <h3 data-aos="fade-up" className="text-center">
                        <FaRocket /> Technologies
                    </h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <GrReactjs />
                            </p>
                            <p> React.js</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiTypescript />
                            </p>
                            <p>TypeScript</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card2">
                            <p>
                                <AiFillHtml5 />
                            </p>
                            <p>HTML</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card2">
                            <p>
                                <SiCsswizardry />
                            </p>
                            <p>CSS</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiJavascript />
                            </p>
                            <p>JavaScript</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card2">
                            <p>
                                <DiJava />
                            </p>
                            <p>Java</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiSpringboot />
                            </p>
                            <p>Spring Boot</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h3
                        data-aos="fade-up"
                        className="text-center"
                        style={{ marginTop: "40px" }}
                    >
                        <FaToolbox /> Tools
                    </h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiPostman />
                            </p>
                            <p>Postman</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiVisualstudiocode />
                            </p>
                            <p>Visual Studio Code</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiEclipseide />
                            </p>
                            <p>Eclipse</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card2">
                            <p>
                                <SiJira />
                            </p>
                            <p>JIRA</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiBitbucket />
                            </p>
                            <p>Bitbucket</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card2">
                            <p>
                                <SiJenkins />
                            </p>
                            <p>Jenkins</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h3
                        data-aos="fade-up"
                        className="text-center"
                        style={{ marginTop: "40px" }}
                    >
                        <FaAward /> Other Skills
                    </h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <VscDebugConsole />
                            </p>
                            <p>Debugging</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <BiCodeCurly />
                            </p>
                            <p>Good Coding Practices</p>
                        </div>
                        <div data-aos="fade-up" className="learning_card">
                            <p>
                                <SiTestcafe />
                            </p>
                            <p>Testing Procedures</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learnings;
