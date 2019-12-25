import React from 'react';
import PropTypes from 'prop-types';
import { addCity } from 'src/common-events/events';

import FoundCitiesContainer from './FoundCitiesContainer';

const FoundCities = props => {
    const { handleCloseSearchInterface, foundCities } = props;

    return (
        <FoundCitiesContainer>
            {foundCities.map((city, index) => {
                const { id, name, weather, main } = city;

                const handleClickCity = () => {
                    addCity(id);
                    handleCloseSearchInterface();
                };

                return (
                    <button
                        className="found-cities__city"
                        key={`${id}${index}`}
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
        </FoundCitiesContainer>
    );
};

FoundCities.propTypes = {
    foundCities: PropTypes.arrayOf(PropTypes.any).isRequired,
    handleCloseSearchInterface: PropTypes.func.isRequired,
    addCity: PropTypes.func.isRequired
};

export default FoundCities;
