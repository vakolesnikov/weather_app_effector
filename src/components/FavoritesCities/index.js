import React from 'react';
import PropTypes from 'prop-types';

import CityItem from '../CityItem';

import './index.css';

const FavoritesCities = props => {
    const { citiesFavorites, actionRemoveCity } = props;

    if (!citiesFavorites.length) {
        return null;
    }

    return (
        <div className="favorites-cities">
            <div className="favorites-cities__section-title">favorites cities</div>
            {citiesFavorites.map(city => (
                <CityItem key={city.id} city={city} actionRemoveCity={actionRemoveCity} />
            ))}
        </div>
    );
};

FavoritesCities.propTypes = {
    citiesFavorites: PropTypes.arrayOf(PropTypes.any).isRequired,
    actionRemoveCity: PropTypes.func.isRequired
};

export default FavoritesCities;
