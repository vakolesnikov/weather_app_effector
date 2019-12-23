import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import CityItem from '../CityItem';

import './index.css';

const DefaultCity = props => {
    const { defaultCity, isLoadUserLocation, isErrorLoadUserLocation } = props;

    return (
        <div className="default-city">
            {!isLoadUserLocation && isErrorLoadUserLocation && (
                <div className="default-city__load-error">Geolocation not defined</div>
            )}
            {isLoadUserLocation && <Loader />}
            {defaultCity.id && (
                <>
                    <div className="default-city__section-title">your city</div>
                    <CityItem city={defaultCity} excludeDeleteIcon />
                </>
            )}
        </div>
    );
};

DefaultCity.propTypes = {
    defaultCity: PropTypes.objectOf(PropTypes.any).isRequired,
    isLoadUserLocation: PropTypes.bool.isRequired,
    isErrorLoadUserLocation: PropTypes.bool.isRequired
};

export default DefaultCity;
