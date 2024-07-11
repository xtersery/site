import './Footer.css'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer-box'>
        <div className="contacts">
          <h3>Контакты</h3>
          <div className="borderline"></div>
          <div className='address'>
            <FaLocationDot/>
            <span className='address-text'>г. Хабаровск, ул. Пушкина, 38а</span>
          </div>
          <div className='phone'>
            <FaPhoneAlt/>
            <span className='phone-number'> +7 (4212) 91-18-18</span>
          </div>
        </div>
        <div className="emails">
          <h3>Почта</h3>
          <div className="borderline"></div>
          <div className='email'>
            <MdEmail/>
            <span className='email-text'>mail@dalinvest-tour.ru</span>
          </div>
        </div>
    </div>
  )
}

export default Footer;
