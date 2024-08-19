import React from 'react';
import Lottie from "lottie-react";
import developerAnimation from "./Animation_developer.json";
import { useRef } from "react";
import './hero.css';

const Hero = () => {

    const lottieRef = useRef();

    return (

        <section className='hero'>

            {/* For Left Section */}

            <div className='left-section'>

                <div className="parent-avatar">
                    <img src="./53.png" className="avatar" alt="" />
                    <span><i className="fas fa-circle-check"></i></span>
                </div>

                <h1 className='title'>Software designer, founder, and amateur astronaut.</h1>

                <p className="sub-title">
                    I’m Noran Mostafa, a software designer and entrepreneur based in New York
                    City. I’m the founder and CEO of Planetaria, where we develop
                    technologies that empower regular people to explore space on their own
                    terms.
                </p>

                <div className='allIcons'>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>

            </div>

            {/* For Right Section */}

            <div className='right-section animation'>
                <Lottie animationData={developerAnimation} lottieRef={lottieRef} onLoadedImages={() => {
                    // @ts-ignore
                    lottieRef.current.setSpeed(0.5);
                }} />
            </div>

        </section>
    )
}

export default Hero;
