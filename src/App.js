
import { useState } from 'react';
import './App.css';
import CurrWeather from './components/curr-weather/curr-weather';
import Footer from './components/Footer';
import Search from './components/search/search';
import Titlebar from './components/Titlebar/Titlebar';



function App() {

  const [currentWeatherFetch, setCurrentWeather] = useState(null);
  const [forecast, setForecast] =useState(null);
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3480952f6cefaf7a9cee71c7360d3a0d`)
    const forecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3480952f6cefaf7a9cee71c7360d3a0d`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) =>  {
        const weatherResponse = await response[0].json(); 
        const forecastResponse = await response[0].json();     
      })

  }

  return (
    <div className="container">
      <div className="content">
     
    <Titlebar/>
     <Search onSearchChange={handleOnSearchChange}/>
     <CurrWeather/>
     </div>
     <div className='footer'>
      <Footer/>
     </div>
     
    </div>
   
      

  );
}

export default App;
