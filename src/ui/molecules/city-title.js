import styled from 'styled-components';
import React from 'react';

import { CityName, CityWeatherDescription } from 'src/ui/atoms';

const CityTitleWrapper = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    padding-left: 60px;
`;

const CityTitle = ({ name, description }) => (
    <CityTitleWrapper>
        <CityName name={name} />
        <CityWeatherDescription description={description} />
    </CityTitleWrapper>
);

export { CityTitle };
