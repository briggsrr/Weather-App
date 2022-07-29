
import { useState } from 'react';
import './App.css';
import CurrentWeather from './components/curr-weather/current-weather';
import Footer from './components/Footer';
import Search from './components/search/search';
import Titlebar from './components/Titlebar/Titlebar';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forecast from './components/forecast/forecast';



function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);

    
  };

  return (
    <div className="container">
      <div className="content">
     
    <Titlebar/>
     <Search onSearchChange={handleOnSearchChange}/>
     {currentWeather && <CurrentWeather data={currentWeather} />}
     {forecast && <Forecast data={forecast} />}
    
     </div>
     
     <div className='footer'>
      <Footer/>
     </div>
     
    </div>
   
      

  );
}

export default App;
