import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { removeCity } from 'src/common-events/events';

import { DeleteIcon } from 'src/ui/atoms';
import { CityWeather, CityTitle } from 'src/ui/molecules';

const CityItemContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    position: relative;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 2px rgba(109, 109, 109, 0.2);

    & .city-item__delete-button {
        cursor: pointer;
        width: 20%;
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

const CityItem = ({ city, excludeDeleteIcon }) => {
    const { id, main, weather, name } = city;
    const { icon, description } = weather[0];

    const handleRemoveClick = () => removeCity(id);

    return (
        <CityItemContainer>
            <CityWeather icon={icon} temp={main.temp} />
            <CityTitle name={name} description={description} />
            {!excludeDeleteIcon && (
                <button
                    type="button"
                    className="city-item__delete-button"
                    onClick={handleRemoveClick}
                >
                    <DeleteIcon />
                </button>
            )}
        </CityItemContainer>
    );
};

CityItem.propTypes = {
    city: PropTypes.objectOf(PropTypes.any).isRequired,
    excludeDeleteIcon: PropTypes.bool
};

CityItem.defaultProps = {
    excludeDeleteIcon: false
};

export { CityItem };
