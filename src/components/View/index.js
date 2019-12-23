import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchInterface from '../SearchInterface';

import FavoritesCities from '../FavoritesCities';
import DefaultCity from '../DefaultCity';
import './index.css';
import { initApp, getGeoLocation } from '../../events';

export default function View() {
    useEffect(() => {
        getGeoLocation();
        initApp();
    }, []);

    const [isVisibleSearchInput, setIsVisibleSearchInput] = useState(false);

    const handleCloseSearchInterface = () => {
        setIsVisibleSearchInput(false);
    };

    const handleClickAddButton = () => {
        setIsVisibleSearchInput(true);
    };

    return (
        <div className="main-container">
            <div className="main-container__logo">Weather</div>
            <button
                type="button"
                className="main-container__add-city-button"
                onClick={handleClickAddButton}
            >
                Add city
            </button>

            <DefaultCity />

            <FavoritesCities />
            {isVisibleSearchInput && (
                <SearchInterface handleCloseSearchInterface={handleCloseSearchInterface} />
            )}
        </div>
    );
}
