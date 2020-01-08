import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from 'src/ui/atoms';
import { CityWeather, CityTitle } from 'src/ui/molecules';

const THEMS = {
    lightGray: '#ececec',
    white: '#ffffff'
};

const CityItemContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px 15px 15px 40px;
    position: relative;
    align-items: center;
    background-color: ${props => THEMS[props.theme]};
    box-shadow: 0 2px 2px 2px rgba(109, 109, 109, 0.2);

    & .city-item__delete-button {
        cursor: pointer;
        width: 20%;
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

export const CityItem = ({ city, excludeDeleteIcon, theme, removeCity }) => {
    const { id, main, weather, name } = city;
    const { icon, description } = weather[0];

    const handleRemoveClick = () => removeCity(id);

    return (
        <CityItemContainer theme={theme}>
            <CityTitle name={name} description={description} />
            <CityWeather icon={icon} temp={main.temp} />
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
    removeCity: PropTypes.func,
    excludeDeleteIcon: PropTypes.bool,
    theme: PropTypes.string
};

CityItem.defaultProps = {
    removeCity: Function.prototype,
    excludeDeleteIcon: false,
    theme: 'white'
};
