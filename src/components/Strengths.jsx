import React from "react";
import Typewriter from "typewriter-effect";
import hard_work from "../assets/hard_work.png";
import problem_solver from "../assets/problem_solver.png";
import prompt from "../assets/prompt.png";
import team from "../assets/team.png";

const ConsiderMe = () => {
    return (
        <div className="considerMe_box" id="strengths">
            <p className="my_heading" data-aos="fade-up">
                My{" "}
                <span className="d-inline-block">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: ["Strengths"],
                        }}
                    />
                </span>
            </p>

            <div style={{ marginTop: "-20px" }}>
                <div className="row1-container">
                    <div className="box box-down cyan" data-aos="fade-right">
                        <h2>Team Player</h2>
                        <p>
                            As a team player, I thrive on collaboration and believe in the
                            power of collective effort. I communicate effectively, listen
                            actively, and offer constructive feedback to contribute
                            meaningfully to my team and foster a culture of excellence.
                        </p>
                        <img src={team} alt="Team Player" />
                    </div>

                    <div className="box red" data-aos="fade-down">
                        <h2>Problem Solver</h2>
                        <p>
                            I think critically and imaginatively to devise elegant solutions
                            that optimize performance, enhance user experience, and drive
                            innovation.
                        </p>
                        <img src={problem_solver} alt="Problem Solver" />
                    </div>

                    <div className="box box-down blue" data-aos="fade-left">
                        <h2>Prompt</h2>
                        <p>
                            As a person who values time and respects deadlines, I approach
                            every task with a sense of urgency and purpose. My commitment to
                            promptness is reflected in my unwavering dedication to delivering
                            exceptional work on time, every time.
                        </p>
                        <img src={prompt} alt="Prompt" />
                    </div>
                </div>
                <div className="row2-container">
                    <div className="box orange" data-aos="fade-up">
                        <h2>Hard Working</h2>
                        <p>
                            As a coder, I strive to consistently exceed expectations by
                            investing substantial effort and willingly taking on challenges
                            that push me beyond my limits.
                        </p>
                        <img src={hard_work} alt="Hard Working" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsiderMe;
