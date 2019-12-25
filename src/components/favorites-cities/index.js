import React from 'react';
import { useStore } from 'effector-react';
import CityItem from 'src/components/city-item';

import FavoritesCitiesContainer from 'src/components/favorites-cities/favorites-cities-container';
import { favoriteCities } from './model';

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
