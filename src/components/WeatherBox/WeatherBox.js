import { useCallback, useState } from 'react';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = props => {
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = useCallback((city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d9df579968077defb121d007ddd656a&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeatherData({
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main
        });
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary {...weatherData} />
      <Loader />
    </section>
  )
};

export default WeatherBox;