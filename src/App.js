
import './App.css';
import CurrWeather from './components/curr-weather/curr-weather';
import Search from './components/search/search';



function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange}/>
     <CurrWeather/>
    </div>
  );
}

export default App;
