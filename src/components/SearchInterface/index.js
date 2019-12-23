import React, { useState } from 'react';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';

import ClearIcon from '../../icons/Clear';
import FoundCities from '../FoundCities';

import './index.css';

import { removeCitiesFound, searchCity } from '../../events';
import { foundCities } from '../../store';

export default function SearchInterface(props) {
    const [cityValue, setCityValue] = useState('');
    const currentFoundCities = useStore(foundCities);

    const handleFindCity = e => {
        const { value } = e.target;

        setCityValue(value);
        searchCity(value);
    };

    const handleClearSearchInput = () => {
        setCityValue('');
        removeCitiesFound();
    };

    const handleCloseSearchInterface = () => {
        const { handleCloseSearchInterface: customHandleCloseSearchInterface } = props;

        customHandleCloseSearchInterface();
        removeCitiesFound();
    };

    return (
        <div className="search-interface">
            <div className="search-interface__overlay" />
            <div className="search-interface__input-wrapper">
                <input
                    onChange={handleFindCity}
                    value={cityValue}
                    className="search-interface__search-city-input"
                    placeholder="Type City name"
                />
                <button
                    type="button"
                    onClick={handleClearSearchInput}
                    className="search-interface__clear-button"
                >
                    <ClearIcon className="search-interface__clear-button-icon" />
                </button>

                <button
                    type="button"
                    className="search-interface__cancel-button"
                    onClick={handleCloseSearchInterface}
                >
                    Close
                </button>
            </div>
            {!!currentFoundCities.length && (
                <FoundCities handleCloseSearchInterface={handleCloseSearchInterface} />
            )}
        </div>
    );
}

SearchInterface.propTypes = {
    handleCloseSearchInterface: PropTypes.func.isRequired
};
