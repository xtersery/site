import React, { useState } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import './Content.css'
import SimpleCarousel from './SimpleCarousel.jsx'


import Search from '../search/Search.jsx';
import {cards, bestCards} from '../../data/cardsData.js';
import Card from '../card/Card.jsx';
import Programs from '../programs/Programs.jsx';
import SimpleSlider from '../slider/Slider.jsx'
import Testimonials from '../testimonials/Testimonials.jsx'
import Feedback from '../feedback/Feedback.jsx';

const { Content } = Layout;

const Body: React.FC = (e) => {
    const [showCards, setShowCards] = useState([]);

    function handleShowCards(e) {
        let list: any = [];
        let location = e['location']
        cards.map((card, i) => {
            if (card.location == location) {
                list.push(card);
            }
        })
        setShowCards(list);
        console.log(list);
    }

    return (<Content style={{
        position: 'relative',
        top: '-17rem',
    }}>


        <Search callFunction={handleShowCards}/>
        <div className="card_bx">
            {showCards.length > 0 && showCards.map((card, i) => <Card props={card} key={i}/>)}
        </div>



        <div className='offers'>
            <div className="h1-box">
                <h1>Горящие пакеты туров для вас</h1>
            </div>
            <p>Выбери своё следующее место назначения</p>
            <SimpleSlider/>
            {/* <div className="cards">
            </div> */}
        </div>
        <Programs />
        <Testimonials />
        <Feedback />
        <div className='end'></div>

    </Content>);
}

export default Body;
