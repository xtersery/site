import React, { useState } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from 'react-icons/rx';

import './Search.css'

const Search = ({ callFunction }) => {
    const [location, setLocation] = useState('');
    const [tourists, setTourists] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const fillInfo = (_event) => {
        setLocation(document.getElementById('location').value);
        setTourists(document.getElementById('travelers').value);
        setDateFrom(document.getElementById('date_from').value);
        setDateTo(document.getElementById('date_to').value);
    }

    const doSearch = (_event) => {
        let json = {
            "location": location,
            "travelers": tourists,
            "date-from": dateFrom ,
            "date-to": dateTo,
        }
        callFunction(json);
    }

    return (
    <div className='search container section'>
        <div className="sectionContainer grid">

            <div className="search-form">
                <div className="search-inputs">
                    <div className="single-input flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Куда</h4>
                            <input id="location" type="text" placeholder='Город'/>
                        </div>
                    </div>
                    <div className="single-input flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Туристы</h4>
                            <input id="travelers" type="text" placeholder='Количество'/>
                        </div>
                    </div>
                    <div className="single-input flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Дата прибытия</h4>
                            <input id="date_from" type="text" placeholder='Выберите дату'/>
                        </div>
                    </div>
                    <div className="single-input flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Дата вылета</h4>
                            <input id="date_to" type="text" placeholder='Выберите дату' onChange={fillInfo}/>
                        </div>
                    </div>

                    <button className='btn btnBlock' onClick={doSearch}>Искать туры</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
