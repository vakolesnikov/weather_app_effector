import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const CityWeatherTempWraper = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

const CityWeatherTemp = props => {
    const { temp } = props;

    return <CityWeatherTempWraper>{Math.round(temp)}</CityWeatherTempWraper>;
};

CityWeatherTemp.propTypes = {
    temp: PropTypes.number.isRequired
};

export { CityWeatherTemp };
