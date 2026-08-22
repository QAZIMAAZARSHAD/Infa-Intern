import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { SiReact, SiSpringboot } from "react-icons/si";
import triangle from "../assets/triangle.png";
import Typewriter from "typewriter-effect";

const Improvement = () => {
    return (
        <div>
            <div className="container mb-4" id="imporvement">
                <p className="my_heading" data-aos="fade-up">
                    Where I Need To{" "}
                    <span className="d-inline-block">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: ["Improve"],
                            }}
                        />
                    </span>
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className="card improvement_card"
                            data-aos="fade-right"
                            style={{ width: "18rem" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    <BiCodeAlt />
                                </h5>
                                <p className="card-text">Good coding practices</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="card improvement_card"
                            data-aos="fade-up"
                            style={{ width: "18rem" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    <SiReact />
                                </h5>
                                <p className="card-text">Advanced Concepts of React.js</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="card improvement_card"
                            data-aos="fade-left"
                            style={{ width: "18rem" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    <SiSpringboot />
                                </h5>
                                <p className="card-text">Advanced Concepts of Springboot</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="triangle">
                <img src={triangle} alt="" />
            </div>
        </div>
    );
};

export default Improvement;
