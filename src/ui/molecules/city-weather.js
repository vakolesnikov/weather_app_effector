import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { CityWeatherIcon, CityWeatherTemp } from 'src/ui/atoms';

const CityWeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
`;

const CityWeather = props => {
    const { icon, temp } = props;

    return (
        <CityWeatherWrapper>
            <CityWeatherIcon icon={icon} />
            <CityWeatherTemp temp={temp} />
        </CityWeatherWrapper>
    );
};

CityWeather.propTypes = {
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
};

export { CityWeather };
