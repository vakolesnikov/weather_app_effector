import React from 'react';
import { useStore } from 'effector-react';

import { CityItem } from 'src/ui/organisms';

import FavoritesCitiesContainer from 'src/features/favorites-cities/favorites-cities-container';
import { SectionTitle } from '../../ui/atoms';
import { favoriteCities } from './model';

const FavoritesCities = () => {
    const currentFavoriteCities = useStore(favoriteCities);

    if (!currentFavoriteCities.length) {
        return null;
    }

    return (
        <FavoritesCitiesContainer>
            <SectionTitle title="favorites cities" />
            {currentFavoriteCities.map(city => (
                <CityItem key={city.id} city={city} />
            ))}
        </FavoritesCitiesContainer>
    );
};

export default FavoritesCities;
