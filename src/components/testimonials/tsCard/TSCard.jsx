import React, { useEffect, useRef } from 'react';
import './TSCard.css'
import VanillaTilt from 'vanilla-tilt';
import person from './../../../assets/person.svg';

const TSCard =  () => {
    const tiltRef = useRef();

    useEffect(() => {
        const node = tiltRef.current;
        if (node) {
            VanillaTilt.init(node, {
                max: 10,
                speed: 400,
                glare: true,
                'max-glare': 0.5,
            });
        }

        return () => {
            if (node && node.vanillaTilt) {
                node.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div className="box" ref={tiltRef}>
            <div className="elements bg"></div>
            <div className="elements imgBx">
                <img src={person} alt="" />
            </div>
            <div className="elements name">
                <h2>Рандомный человек</h2>
            </div>
            <div className="elements content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum quaerat amet optio eligendi tempore nesciunt a accusamus numquam. Explicabo.</p>
            </div>
            <div className="card"></div>
        </div>
    );
}

export default TSCard;
