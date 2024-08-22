import Slider from "react-slick/lib/slider";
import {bestCards} from './../../data/cardsData.js';
import Card from './../../components/card/Card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (<Slider {...settings}>
        {bestCards.map((card, i)=> <div key={i}><Card props={card} key={card.id}/></div>)}
    </Slider>);
}
