import React from 'react';
import { useStore } from 'effector-react';
import Loader from 'src/components/Loader';
import CityItem from 'src/components/CityItem';

import DefaultCityContainer from './DefaultCityContainer';
import { defaultCity } from './model';

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
