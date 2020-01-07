import React from 'react';
import PropTypes from 'prop-types';

import { Loader, SectionTitle } from 'src/ui/atoms';
import { CityItem } from 'src/ui/organisms/index';

import DefaultCityContainer from 'src/ui/organisms/default-city/default-city-container';

const DefaultCity = ({ defaultCity }) => {
    return (
        <DefaultCityContainer>
            {defaultCity.status === 'load' && <Loader />}
            {defaultCity.id && (
                <>
                    <SectionTitle title="your city" />
                    <CityItem city={defaultCity} excludeDeleteIcon />
                </>
            )}
        </DefaultCityContainer>
    );
};

DefaultCity.propTypes = {
    defaultCity: PropTypes.objectOf(PropTypes.any).isRequired
};

export { DefaultCity };
