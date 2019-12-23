import React from 'react';

import { useStore } from 'effector-react';
import Loader from '../Loader';

import CityItem from '../CityItem';
import './index.css';
import { defaultCity } from '../../store';

const DefaultCity = () => {
    const currentDefaultCity = useStore(defaultCity);

    return (
        <div className="default-city">
            {currentDefaultCity.status === 'load' && <Loader />}
            {currentDefaultCity.id && (
                <>
                    <div className="default-city__section-title">your city</div>
                    <CityItem city={currentDefaultCity} excludeDeleteIcon />
                </>
            )}
        </div>
    );
};

export default DefaultCity;
