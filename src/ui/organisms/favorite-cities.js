import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { CityItem } from 'src/ui/organisms/index';
import { SectionTitle } from 'src/ui/atoms';

const FavoritesCitiesContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;

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
