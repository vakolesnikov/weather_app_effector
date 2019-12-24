import React from 'react';

import { useStore } from 'effector-react';

import DefaultCityContainer from './DefaultCityContainer';
import Loader from '../Loader';
import CityItem from '../CityItem';
import { defaultCity } from '../../store';

const DefaultCity = () => {
    const currentDefaultCity = useStore(defaultCity);

    return (
        <DefaultCityContainer>
            {currentDefaultCity.status === 'load' && <Loader />}
            {currentDefaultCity.id && (
                <>
                    <div className="default-city__section-title">your city</div>
                    <CityItem city={currentDefaultCity} excludeDeleteIcon />
                </>
            )}
        </DefaultCityContainer>
    );
};

export default DefaultCity;
