import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const CityNameWrapper = styled.div`
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
`;

const CityName = ({ name }) => <CityNameWrapper>{name}</CityNameWrapper>;

CityName.propTypes = {
    name: PropTypes.string.isRequired
};

export { CityName };
