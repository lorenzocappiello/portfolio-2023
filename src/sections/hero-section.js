import React from "react";
import '/Users/lorenzocappiello/Desktop/portfolio-2023/src/App.css'; 
import Typewriter from "typewriter-effect";

function HeroSection() {

    return (
    <section className="header">
        <div className="hero-section">
            <div className="hero-content">
                <h1 className='welcome-title'>Hi, I am <br/>Lorenzo Cappiello</h1>
                
                <Typewriter 
                onInit={(typewriter)=> {typewriter
                    .typeString("front-end developer")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("back-end developer")
                    .start();
                }}
                />

                <div class="social-networks">
                    <a href="https://www.linkedin.com/in/lorenzocappiello/" class="fa fa-linkedin"/>
                    <a href="https://github.com/lorenzocappiello" class="fa fa-github"/>
                    <a href="https://www.instagram.com/lorenzoandcode/" class="fa fa-instagram"/>
                </div>
            </div>
            <div className="hero-button">
                <a className="connection-link" href="mailto:lorenzocappiello.work@gmail.com">
                    <button className="connection">
                        Let's connect ↘
                    </button>
                </a>
            </div>
        </div>
    </section>
    ); 

}

export default HeroSection; 