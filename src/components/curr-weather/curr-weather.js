import React from "react";
import "./curr-weather.css"

const CurrWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade </p>
                    <p className="weather-desc">Sunny </p>
                </div>
            
            <img alt ="weather" className="weather-icon" src ="icons/01d.png"/>
            </div>
        </div>
    );

}
export default CurrWeather