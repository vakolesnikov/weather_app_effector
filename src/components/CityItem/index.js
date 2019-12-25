import React from 'react';
import PropTypes from 'prop-types';
import { removeCity } from 'src/events';
import DeleteIcon from 'src/icons/Delete';

import CitiItemContainer from './CitiItemContainer';

const CityItem = ({ city, excludeDeleteIcon }) => {
    const { id, main, weather } = city;

    const handleRemoveClick = () => removeCity(id);

    return (
        <CitiItemContainer>
            <div className="city-item__weather">
                <img
                    className="city-item__weather-icon"
                    src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                    alt="img"
                />
                <span className="city-item__weather-value">{Math.round(main.temp)} ℃</span>
            </div>
            <div className="city-item__city-information">
                <span className="city-item__city-name">{city.name}</span>
                <span className="city-item__weather-description">{weather[0].description}</span>
            </div>
            {!excludeDeleteIcon && (
                <button
                    type="button"
                    className="city-item__delete-button"
                    onClick={handleRemoveClick}
                >
                    <DeleteIcon />
                </button>
            )}
        </CitiItemContainer>
    );
};

CityItem.propTypes = {
    city: PropTypes.objectOf(PropTypes.any).isRequired,
    excludeDeleteIcon: PropTypes.bool
};

CityItem.defaultProps = {
    excludeDeleteIcon: false
};

export default CityItem;
