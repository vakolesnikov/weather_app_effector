import React from 'react';
import { useStore } from 'effector-react';
import CityItem from '../CityItem';

import FavoritesCitiesContainer from './FavoritesCitiesContainer';
import { favoriteCities } from '../../store';

const FavoritesCities = () => {
    const currentFavoriteCities = useStore(favoriteCities);

    if (!currentFavoriteCities.length) {
        return null;
    }

    return (
        <FavoritesCitiesContainer>
            <div className="favorites-cities__section-title">favorites cities</div>
            {currentFavoriteCities.map(city => (
                <CityItem key={city.id} city={city} />
            ))}
        </FavoritesCitiesContainer>
    );
};

export default FavoritesCities;
