import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { Loader, SectionTitle } from 'src/ui/atoms';
import { CityItem } from 'src/ui/organisms/index';

const DefaultCityContainer = styled.div`
    max-width: 600px;
    width: 100%;
    margin-bottom: 40px;
`;

export const DefaultCity = ({ defaultCity }) => {
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
