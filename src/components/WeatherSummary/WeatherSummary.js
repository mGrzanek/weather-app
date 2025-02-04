import PropTypes from 'prop-types';
import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({city, temp, icon, description}) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp:</strong> {temp}
        </p>
      </div>
    </section>
  );
};

WeatherSummary.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default WeatherSummary;