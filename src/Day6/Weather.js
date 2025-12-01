import axios from "axios";
import { useEffect, useState } from "react"

const Weather = () => {
  const APIkey = 'daf6c925c4d9f3dcc02bc79741bc5f8d';
  const city = 'Seoul';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
  
  const [weather,setWeather] = useState(null);
  useEffect(()=>{
    const loadWeather = async ()=>{
      const res = await axios.get(url);
      console.log( res.data );
      setWeather(res.data);
    }
    loadWeather();
  },[]);  //처음 1번만 실행
  return (
    <div className="weather">
      <h1>날씨정보</h1>
      {
        // weather && <p>{JSON.stringify(weather)}</p>
        weather && (
          <div>
            <p>온도 : {Math.floor(weather.main.temp)}℃</p>
          </div>
        )
      }
    </div>
  )
}

export default Weather