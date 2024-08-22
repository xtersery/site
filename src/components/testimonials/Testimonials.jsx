import React, {useState} from 'react';
import './Testimonials.css';
import TSCard from './tsCard/TSCard';
import yandexloc from './yandex.svg';
import Modal from '../Modal/Modal.tsx';

const Testimonials = () => {
    const [isModalActive, setIsModalActive] = useState(false);

    const openModal = () => {
        setIsModalActive(true);
    };

    const closeModal = () => {
        setIsModalActive(false);
    };

    return (
    <div className='ts-container'>
        <h1>Отзывы клиентов</h1>
        <div className='navbar'>
            <Button className='btn ts-btn'>Все</Button>
            <Button className='btn ts-btn' as='a' href='https://2gis.ru/khabarovsk/firm/4926340373415439?m=135.076141%2C48.478682%2F16' target="_blank" rel="noopener noreferrer">2ГИС</Button>
            <Button className='btn ts-btn' as='a' href='https://yandex.ru/maps/org/dal_invest_tur/1094714669/?ll=135.076215%2C48.478703&z=14' target='blank' rel='noopener noreferrer'><img src={yandexloc} alt="" />Карты</Button>
            <button className='btn add-ts' onClick={openModal}>Оставить отзыв</button>
            {isModalActive &&
            <Modal onClose={closeModal}></Modal>}
        </div>
        <div className="ts-slider">
            <TSCard name="" text=""/>
        </div>
    </div>);
}

export default Testimonials;


const Button = ({onClick, children, className = 'btn', as: Component = 'button', ...rest}) => {
    return (
        <Component onClick={onClick} className={className} {...rest}>
            {children}
        </Component>
    );
}
