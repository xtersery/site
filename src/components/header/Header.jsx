import React, { useState } from 'react'
import './Header.css'
import Logo from './../../assets/logo.png'
import person from './../../assets/person.svg';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { gridOutline, close } from 'ionicons/icons';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(gridOutline);
    const navigate = useNavigate();

    const signUp = (e) => {
        navigate("register");
    }

    const logIn = (e) => {
        navigate("login");
    }

    const toCruise = (e) => {
      navigate('../cruise')
    }

    const toTours = (e) => {
      navigate('../tours')
    }

    const toMain = (e) => {
      navigate('../')
    }

  return (
    <div className="header">
        <img src={Logo} alt='' className='logo' onClick={toMain}/>

        <ul className='header-menu'>
            <li onClick={toTours}>Туры</li>
            <li onClick={toCruise}>Круизы</li>
            <li>Отели </li>
            <li>Лечение</li>
            <li>Санатории</li>
            <li>О нас</li>
        </ul>

        {/* <div className='log_in' id='log_in'>
          <img src={person} alt='person'></img>
          <span className='login-text'><button onClick={logIn}>ВОЙТИ</button></span>
        </div> */}
    </div>

  )
}

export default Header
