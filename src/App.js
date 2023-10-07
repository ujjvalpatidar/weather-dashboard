import './App.css';
import react, {useEffect, useState} from 'react';


function App() {
  const [city, setCity] = useState("mumbai");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
   const fetchApi = async () => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63c38d527aa2eaf7087b302daccab09f`;
const response = await fetch(url);
const resJson = await response.json();
setCity(resJson)
};
fetchApi()
  },[search] )
  
  return (
   <>
    <div className='main-imag'>
    <input type='search' placeholder='enter location' autocomplete="off" value={search} className='search' onChange={ (event) => { setSearch(event.target.value) }}/>
{city && !city.name? 
  <h1 className='empty-input'>No Data Found</h1>
 : (
  <>
  <div className='weather-details'>
  <h1>{city && city.name && city.name}</h1>{
    city.weather?.map((data) =>{
    return <p className='wearher-condition' key={data.id}>{data.main}</p>
  })
}
 <h1 className='temp'>{city && city.main && Math.trunc(city.main.temp)}<span>°c</span><div className='temp-img'></div>
</h1>
  </div>
  <div className='container'>
  <div className='min-temp'><p>Min Temperature</p><h2 className='temp-min-max'>{city && city.main && Math.trunc(city.main.temp_min)}°c</h2></div>
<div className='max-temp'><p>Max Temperature</p><h2  className='temp-min-max'>{city && city.main && Math.trunc(city.main.temp_max)}°c</h2></div>
</div>

  </>
)

}
    </div>
  <div className='more-info-main'>
    <div className='info-first'>
    <p>wind</p>
    <h3>{city && city.wind && city.wind.speed} km/hr</h3>

    </div>
    <div className='info-second'><p>Feels Like</p>
<h3 className='info-h3'>{city && city.main && city.main.feels_like}°c</h3></div>
    <div className='info-third'><p>Humidity</p>
<h3 className='info-humidity'>{city && city.main && city.main.humidity}%</h3></div>
    <div className='info-fourth'> <p>Pressure</p>
    <h3 className='info-h3'>{city && city.main && city.main.pressure} hPa</h3></div>
  </div>

    </>

  );
}

export default App;
