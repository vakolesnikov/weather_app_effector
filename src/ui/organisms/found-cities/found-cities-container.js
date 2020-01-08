import styled from 'styled-components';

export default styled.div`
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    padding: 30px;

    & .found-cities__city {
        max-width: 580px;
        width: 100%;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        text-align: left;
        background: none;
    }

    & .found-cities__city:hover {
        transform: scale(1.05);
    }
`;
