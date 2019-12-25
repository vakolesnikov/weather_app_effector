import React, { useState, useRef, useEffect } from 'react';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';

import FoundCities from 'components/FoundCities';
import ClearIcon from '../../icons/Clear';

import SearchInterfaceContainer from './SearchInterfaceContainer';

import { removeCitiesFound, addCity, searchCity } from '../../events';

import { foundCities } from './model';

export default function SearchInterface(props) {
    const searchInput = useRef(null);
    const [cityValue, setCityValue] = useState('');
    const currentFoundCities = useStore(foundCities);

    useEffect(() => {
        searchInput.current.focus();
    }, []);

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
        <SearchInterfaceContainer>
            <div className="search-interface__overlay" />
            <div className="search-interface__input-wrapper">
                <input
                    ref={searchInput}
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
                <FoundCities
                    handleCloseSearchInterface={handleCloseSearchInterface}
                    foundCities={currentFoundCities}
                    addCity={addCity}
                />
            )}
        </SearchInterfaceContainer>
    );
}

SearchInterface.propTypes = {
    handleCloseSearchInterface: PropTypes.func.isRequired
};
