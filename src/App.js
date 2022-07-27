
import './App.css';
import CurrWeather from './components/curr-weather/curr-weather';
import Footer from './components/Footer';
import Search from './components/search/search';
import Titlebar from './components/Titlebar/Titlebar';



function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
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
