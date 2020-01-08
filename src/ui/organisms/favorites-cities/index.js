import React from 'react';
import PropTypes from 'prop-types';

import { CityItem } from 'src/ui/organisms';
import { SectionTitle } from 'src/ui/atoms';
import FavoritesCitiesContainer from './favorites-cities-container';

export const FavoriteCities = ({ favoriteCities, removeCity }) => {
    if (!favoriteCities.length) {
        return null;
    }

    return (
        <FavoritesCitiesContainer>
            <SectionTitle title="favorites cities" />
            {favoriteCities.map(city => (
                <CityItem key={city.id} city={city} removeCity={removeCity}/>
            ))}
        </FavoritesCitiesContainer>
    );
};

FavoriteCities.propTypes = {
    removeCity: PropTypes.func.isRequired,
    favoriteCities: PropTypes.arrayOf(PropTypes.any).isRequired
};
