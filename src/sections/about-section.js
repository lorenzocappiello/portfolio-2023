import React from "react";
import '/Users/lorenzocappiello/Desktop/portfolio 2023/src/About.css';
import Foto from '/Users/lorenzocappiello/Desktop/portfolio 2023/src/sections/foto-profilo.jpg';

function AboutSection() {

    return (
        <section id="about" className="about-section">
            <div className="about-content-general">
                <div className="about-content-2">
                    <div className="photo">
                        <img className="circular-square" src={Foto} alt="Logo"/>;
                    </div>
                    <div className="about-button">
                        <button className="cv-download">Download my CV ↘</button>
                        <a href="#works">
                            <button className="work-with-me">Discover my works ↘</button>
                        </a>
                    </div>
                </div>
                <div className="about-content-1">
                    <p className="about-me">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    A doloremque non, laboriosam, exercitationem impedit similique 
                    perferendis possimus eveniet corporis debitis pariatur aperiam. 
                    Iste exercitationem dolorem similique impedit, animi distinctio 
                    nam! Tenetur velit aperiam doloribus qui itaque odio animi, 
                    repellendus eius accusantium nam consequuntur ad dolores ipsum 
                    voluptatibus non saepe obcaecati quae, tempore rerum cumque 
                    cum ratione nostrum aut officia. Aperiam. Lorem, ipsum dolor 
                    sit amet consectetur adipisicing elit. A doloremque non, qui 
                    laboriosam, exercitationem impedit similique perferendis possimus 
                    eveniet corporis debitis pariatur aperiam. Iste exercitationem 
                    dolorem similique impedit, animi distinctio nam! Tenetur velit 
                    aperiam doloribus qui itaque odio animi, repellendus eius 
                    accusantium nam consequuntur ad dolores ipsum voluptatibus 
                    non saepe obcaecati quae, tempore rerum cumque cum ratione 
                    nostrum aut officia. Aperiam. Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. A doloremque non, qui laboriosam, 
                    exercitationem impedit similique perferendis possimus eveniet 
                    corporis debitis pariatur aperiam. A doloremque non, qui laboriosam, 
                    exercitationem impedit similique perferendis possimus eveniet 
                    corporis debitis pariatur aperiam.
                    </p>
                    <div className="my-skills">
                        <div className="my-skills-content-1">
                            <p className="skills-title">HTML</p>
                            <div className="skills-percentual">
                                <div className="html-percentual">
                                    <div className="html-percentual-text">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">CSS</p>
                            <div className="skills-percentual">
                                <div className="css-percentual">
                                    <div className="css-percentual-text">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">JavaScript (+ Node.js)</p>
                            <div className="skills-percentual">
                                <div className="js-percentual">
                                    <div className="js-percentual-text">
                                        60%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">React.js</p>
                            <div className="skills-percentual">
                                <div className="react-percentual">
                                    <div className="react-percentual-text">
                                        30%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-skills-content-2">
                            <p className="skills-title">Java</p>
                            <div className="skills-percentual">
                                <div className="java-percentual">
                                    <div className="java-percentual-text">
                                        65%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">Java EE</p>
                            <div className="skills-percentual">
                                <div className="javaee-percentual">
                                    <div className="javaee-percentual-text">
                                        50%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">MySQL</p>
                            <div className="skills-percentual">
                                <div className="sql-percentual">
                                    <div className="sql-percentual-text">
                                        80%
                                    </div>
                                </div>
                            </div>
                            <p className="skills-title">JPA / Servlet / JSP</p>
                            <div className="skills-percentual">
                                <div className="jsp-percentual">
                                    <div className="jsp-percentual-text">
                                        50%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 

}

export default AboutSection; 