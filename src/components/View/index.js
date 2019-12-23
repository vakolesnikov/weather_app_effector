import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchInterface from '../../containers/SearchInterface';

import FavoritesCities from '../../containers/FavoritesCities';
import DefaultCity from '../../containers/DefaultCity';
import './index.css';

export default function View(props) {
    useEffect(() => {
        const { actionInitApp } = props;

        actionInitApp();
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

View.propTypes = {
    actionInitApp: PropTypes.func.isRequired
};
