import React from "react";
import Typewriter from "typewriter-effect";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { BsChevronDoubleDown } from "react-icons/bs";
import logo from "../assets/logo.png";

const Introduction = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid" id="intro_box">
                <div id="intro_navbar">
                    <img src={logo} alt="logo" />
                    <div className="" id="navbar">
                        <Link className="nav_link" to="#contribution">
                            Contributions
                        </Link>
                        <Link className="nav_link" to="#learnings">
                            Learnings
                        </Link>
                        <Link className="nav_link" to="#imporvement">
                            Improvement
                        </Link>
                        <Link className="nav_link" to="#strengths">
                            Strengths
                        </Link>
                        <Link className="nav_link" to="#extras">
                            Extras
                        </Link>
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
                            <p>50</p>
                            <p>JIRA Issues</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>45</p>
                            <p>Pull Requests Merged</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>10</p>
                            <p>Repositories Explored</p>
                        </div>
                        <div className="intro_cards_large">
                            <p>9* Months</p>
                            <p>Internship Duration</p>
                        </div>
                        <div className="intro_cards">
                            <p>2</p>
                            <p>Vacation Leaves</p>
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
                                strings: ["#WHERE DATA COMES TO LIFE"],
                            }}
                        />
                    </p>
                </div>
                <div id="down_arrow">
                    <Link className="nav_link" to="#contribution">
                        <BsChevronDoubleDown id="arrow_icon" />
                    </Link>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Introduction;
