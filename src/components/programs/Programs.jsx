import React from 'react'
import './Programs.css'
import './../../data/programsData.js'
import { programsData } from './../../data/programsData.js'
// import RightArrow from './../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>открой для себя</span>
            <span>услуги</span>
            <span className='stroke-text'>для лучшего отдыха</span>
        </div>

        {/* program categories */}
        <div className="program-categories">
            {programsData.map((program, i) => (
                <div className="category" key={i}>
                    <img src={program.image} alt="" />
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
