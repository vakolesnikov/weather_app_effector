import styled from 'styled-components';
import React from 'react';

import { CityName, CityWeatherDescription } from 'src/ui/atoms';

const CityTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CityTitle = ({ name, description }) => (
    <CityTitleWrapper>
        <CityName name={name} />
        <CityWeatherDescription description={description} />
    </CityTitleWrapper>
);

export { CityTitle };
