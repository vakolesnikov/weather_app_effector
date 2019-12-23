import React from 'react';
import { useStore } from 'effector-react';
import CityItem from '../CityItem';

import './index.css';
import { favoriteCities } from '../../store';

const FavoritesCities = () => {
    const currentFavoriteCities = useStore(favoriteCities);

    if (!currentFavoriteCities.length) {
        return null;
    }

    return (
        <div className="favorites-cities">
            <div className="favorites-cities__section-title">favorites cities</div>
            {currentFavoriteCities.map(city => (
                <CityItem key={city.id} city={city} />
            ))}
        </div>
    );
};

export default FavoritesCities;
