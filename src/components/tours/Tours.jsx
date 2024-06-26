import React, { useState } from 'react';
import Header from './../../components/header/Header.jsx'
import sand from './../../assets/sand.jpg'
import { Heart, Bookmark, Share2 } from 'react-feather';
import './Tours.css'
import {cards} from './../../data/cardsData.js';

const Tours = () => {

  return (
    <div>
        <Header />
        <section>
            <div className="container">
                <h1>Список туров</h1>
                <div className="cards">
                    {
                        cards.map((card, i) => (
                            <div key={i} className="card">
                                <h3>{card.title}</h3>
                                <div className="img_text">
                                    <img src={card.img} alt="" />
                                    <h4>{card.text}</h4>
                                </div>
                                <div className="cont_bx">
                                <div className="price">
                                    <div className="info_price">
                                        <a href="More Info"></a>
                                        <h4>${card.price}</h4>
                                    </div>
                                </div>
                                    <div className="days">{card.duration}<br/>{card.location}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Tours
