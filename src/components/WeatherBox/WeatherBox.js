import { useCallback, useState } from 'react';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {
  const [weatherData, setWeatherData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleCityChange = useCallback((city) => {
    setError(false);
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d9df579968077defb121d007ddd656a&units=metric`)
    .then(res => {
      if(res.status === 200) {
        return res.json()
          .then(data => {
            setWeatherData({
              city: data.name,
              temp: data.main.temp,
              icon: data.weather[0].icon,
              description: data.weather[0].main
            });
            setPending(false);
            })
          } else {
            setWeatherData(null);
            setPending(false);
            setError(true);
          }
      });
    }, []);
  
  return (
    <section>
      <PickCity action={handleCityChange} />
      {weatherData && !pending && !error && <WeatherSummary {...weatherData} />}
      {!weatherData && pending && !error && <Loader />}
      {error && !weatherData && !pending && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;