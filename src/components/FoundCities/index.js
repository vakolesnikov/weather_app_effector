import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const FoundCities = props => {
    const { citiesFound, actionAddCity, handleCloseSearchInterface } = props;

    return (
        <div className="found-cities">
            {citiesFound.map(city => {
                const { id, name, weather, main } = city;

                const handleClickCity = () => {
                    actionAddCity(id);
                    handleCloseSearchInterface();
                };

                return (
                    <button
                        className="found-cities__city"
                        key={id}
                        onClick={handleClickCity}
                        type="button"
                    >
                        <div className="found-cities__city-information">
                            <div className="found-cities__city-name">{name}</div>
                            <div className="found-cities__weather-description">
                                {weather[0].description}
                            </div>
                        </div>

                        <div className="found-cities__weather">
                            <img
                                className="found-cities__weather-icon"
                                src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                                alt="img"
                            />
                            <div className="found-cities__weather-value">
                                {Math.round(main.temp)} ℃
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

FoundCities.propTypes = {
    citiesFound: PropTypes.arrayOf(PropTypes.object).isRequired,
    actionAddCity: PropTypes.func.isRequired,
    handleCloseSearchInterface: PropTypes.func.isRequired
};

export default FoundCities;
