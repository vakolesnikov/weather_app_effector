import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const CityWeatherDescriptionWrapper = styled.div``;

const CityWeatherDescription = ({ description }) => (
    <CityWeatherDescriptionWrapper>{description}</CityWeatherDescriptionWrapper>
);

CityWeatherDescription.propTypes = {
    description: PropTypes.string.isRequired
};

export { CityWeatherDescription };
