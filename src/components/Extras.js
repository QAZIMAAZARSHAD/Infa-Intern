import React from "react";
import sunil from "../assets/sunil.png";
import fun_friday from "../assets/fun_friday.png";
import jenkins from "../assets/jenkins.png";
import kt from "../assets/kt.png";
import shm_kt from "../assets/shm_kt.png";
const Timeline = () => {
    return (
        <div>
            <div className="timeline" id="extras">
                <div className="outer">
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-left">
                                Worked during the company holidays <br></br>
                                <span>Customer First Approach</span>
                            </h3>
                            <img src={sunil} alt="" data-aos="fade-left" />
                        </div>
                    </div>
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-right">
                                Delivered a KT Session on <span>Spring Boot Basics</span>
                            </h3>
                            <img src={kt} alt="" data-aos="fade-right" />
                        </div>
                    </div>
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-left">
                                Maintained dev subpods <span>Subpod Maintenance</span>
                            </h3>
                            <img src={jenkins} alt="" data-aos="fade-left" />
                        </div>
                    </div>
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-right">
                                Facilitated an enablement session on <span>SHM UI</span>
                            </h3>
                            <img src={shm_kt} alt="" data-aos="fade-right" />
                        </div>
                    </div>
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-left">
                                Organized a team bonding activity <span>Fun Friday</span>
                            </h3>
                            <img src={fun_friday} alt="" data-aos="fade-left" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
