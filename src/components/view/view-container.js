import styled from 'styled-components';

export default styled.div`
    display: flex;
    min-width: 320px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    background-color: #f1efef;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: relative;
    font-family: Arial;

    & .main-container__logo {
        font-size: 26px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 20px;
        color: #383535;
    }

    & .main-container__add-city-button {
        max-width: 600px;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        border: 3px solid #eeeeee;
        border-radius: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 20px;
        color: #383535;
        cursor: pointer;
        outline: none;
        transition: 0.5s;
        margin-bottom: 40px;
    }

    & .main-container__add-city-button:hover {
        border-color: #000;
    }

    & .update-data-container {
        position: absolute;
        bottom: 10px;
        font-size: 25px;
        color: #ff0000;
    }

    @media (max-width: 600px) {
        .main-container {
            padding: 0 20px;
        }
    }
`;
