import React from 'react';
import PropTypes from 'prop-types';
import { CityItem } from 'src/ui/organisms';

import FoundCitiesContainer from './found-cities-container';

export const FoundCities = props => {
    const { handleCloseSearchInterface, foundCities, addCity } = props;

    return (
        <FoundCitiesContainer>
            {foundCities.map((city, index) => {
                const { id } = city;

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
                        <CityItem city={city} theme="lightGray" excludeDeleteIcon />
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
