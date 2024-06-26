import React, { useState } from 'react';
import './Hero.css';
import travel from './../../assets/travel.svg';
import Header from './../header/Header.jsx';

const Hero = () => {

    return (<>
        <div className='hero'>
            <Header />

            {/* Hero Main Text */}
            <div className='hero-main-text'>
                <div>
                    <img src={travel} alt="" />
                    <span>вместе с нами</span>
                </div>
            </div>
            <div className="hero-mask">

            </div>
        </div>
    </>);
}

export default Hero;
