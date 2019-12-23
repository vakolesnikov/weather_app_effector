import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../icons/Delete';

import './index.css';

const CityItem = ({ city, actionRemoveCity, excludeDeleteIcon }) => {
    const { id, main, weather } = city;

    const handleRemoveClick = () => actionRemoveCity(id);

    return (
        <div key={city.id} className="city-item">
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
        </div>
    );
};

CityItem.propTypes = {
    city: PropTypes.objectOf(PropTypes.any).isRequired,
    actionRemoveCity: PropTypes.func,
    excludeDeleteIcon: PropTypes.bool
};

CityItem.defaultProps = {
    excludeDeleteIcon: false,
    actionRemoveCity: Function.prototype
};

export default CityItem;
