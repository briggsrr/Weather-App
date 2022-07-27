import React from 'react'
import "./Titlebar.css"

const Titlebar = () => {
  return (
    <div className='TitleContainer'>
        <div className='TitleWrapper'>
            <p className="HeaderText">Simple Weather App </p>
            {/* <p className="SubText">A Simple Weather App </p> */}
        </div>
    </div>
  )
}

export default Titlebar