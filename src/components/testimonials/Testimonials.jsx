import './Testimonials.css'
import TSCard from './tsCard/TSCard';
import yandexloc from './yandex.svg';

const Testimonials = () => {
    return (
    <div className='ts-container'>
        <h1>Отзывы клиентов</h1>
        <div className='navbar'>
            <button className='btn ts-btn'>Все</button>
            <button className='btn ts-btn'>2ГИС</button>
            <button className='btn ts-btn'><img src={yandexloc} alt="" />Карты</button>
            <button className='btn add-ts'>Оставить отзыв</button>
        </div>
        <div className="ts-slider">
            <TSCard name="" text=""/>
        </div>
    </div>);
}

export default Testimonials;
