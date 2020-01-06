import styled from 'styled-components';

const CityWeatherIcon = styled.img.attrs(props => {
    const { icon } = props;

    return {
        src: `http://openweathermap.org/img/w/${icon}.png`,
        alt: 'img'
    };
})`
    width: 75px;
    height: 75px;
`;

export { CityWeatherIcon };
