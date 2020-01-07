import React from 'react';
import PropTypes from 'prop-types';
import { addCity } from 'src/common-events/events';

import FoundCitiesContainer from 'src/features/found-cities/found-cities-container';
import { CityTitle, CityWeather } from 'src/ui/molecules';
import { CityItem } from '../../ui/organisms';

const FoundCities = props => {
    const { handleCloseSearchInterface, foundCities } = props;

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

export default FoundCities;
