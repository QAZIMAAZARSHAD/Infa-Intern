import React from "react";
import Typewriter from "typewriter-effect";
import { BsChevronDoubleDown } from "react-icons/bs";
import logo from "../assets/logo.png";

const Introduction = () => {
    return (
            <div className="container-fluid" id="intro_box">
                <div id="intro_navbar">
                    <img src={logo} alt="logo" />
                    <div className="" id="navbar">
                        <a className="nav_link" href="#contribution">
                            Contributions
                        </a>
                        <a className="nav_link" href="#learnings">
                            Learnings
                        </a>
                        <a className="nav_link" href="#imporvement">
                            Improvement
                        </a>
                        <a className="nav_link" href="#strengths">
                            Strengths
                        </a>
                        <a className="nav_link" href="#extras">
                            Extras
                        </a>
                    </div>
                </div>
                <div className="row mt-5">
                    <p
                        className="text-center"
                        style={{ fontSize: "5rem" }}
                        id="intro_my_name"
                    >
                        Qazi Maaz Arshad
                    </p>
                    <p className="text-center" style={{ fontSize: "3rem" }} id="job_role">
                        Software Development Intern
                    </p>
                </div>
                <div id="intro_works">
                    <div id="intro_card_box">
                        <div className="intro_cards">
                            <p>79</p>
                            <p>JIRA Issues</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>66</p>
                            <p>Pull Requests Merged</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>11</p>
                            <p>Services Explored</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>1.4 Years</p>
                            <p>Internship Duration</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p id="datalife">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 200,
                                strings: ["#WHERE DATA AND AI COME TO LIFE"],
                            }}
                        />
                    </p>
                </div>
                <div id="down_arrow">
                    <a className="nav_link" href="#contribution">
                        <BsChevronDoubleDown id="arrow_icon" />
                    </a>
                </div>
            </div>
    );
};

export default Introduction;
