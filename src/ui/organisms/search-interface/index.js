import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FoundCities } from 'src/ui/organisms';
import { ClearIcon } from 'src/ui/atoms';

import SearchInterfaceContainer from './search-interface-container';

export const SearchInterface = props => {
    const searchInput = useRef(null);
    const [cityValue, setCityValue] = useState('');
    const { cities, removeCitiesFound, addCity, searchCity } = props;

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
            {!!cities.length && (
                <FoundCities
                    handleCloseSearchInterface={handleCloseSearchInterface}
                    foundCities={cities}
                    addCity={addCity}
                />
            )}
        </SearchInterfaceContainer>
    );
};

SearchInterface.propTypes = {
    handleCloseSearchInterface: PropTypes.func.isRequired,
    cities: PropTypes.arrayOf(PropTypes.any).isRequired,
    removeCitiesFound: PropTypes.func.isRequired,
    addCity: PropTypes.func.isRequired,
    searchCity: PropTypes.func.isRequired
};
