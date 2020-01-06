import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/features/loader';
import { CityItem } from 'src/ui/organisms';

import DefaultCityContainer from 'src/features/default-city/default-city-container';

const DefaultCity = ({ defaultCity }) => {
    return (
        <DefaultCityContainer>
            {defaultCity.status === 'load' && <Loader />}
            {defaultCity.id && (
                <>
                    <div className="default-city__section-title">your city</div>
                    <CityItem city={defaultCity} excludeDeleteIcon />
                </>
            )}
        </DefaultCityContainer>
    );
};

DefaultCity.propTypes = {
    defaultCity: PropTypes.objectOf(PropTypes.any).isRequired
};

export default DefaultCity;
