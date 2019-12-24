import styled from 'styled-components';

export default styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    position: relative;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 2px rgba(109, 109, 109, 0.2);

    & .city-item__weather {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
    }

    & .city-item__weather-icon {
        width: 75px;
        height: 75px;
    }

    & .city-item__weather-value {
        font-size: 30px;
        font-weight: 700;
    }

    & .city-item__city-information {
        display: flex;
        width: 60%;
        flex-direction: column;
        padding-left: 60px;
    }

    & .city-item__city-name {
        margin-bottom: 10px;
        font-size: 25px;
        font-weight: 700;
        text-transform: uppercase;
    }

    & .city-item__delete-button {
        cursor: pointer;
        width: 20%;
        background-color: transparent;
        border: none;
        outline: none;
    }

    @media (max-width: 600px) {
        .city-item__weather-icon {
            width: 50px;
            height: 50px;
        }

        .city-item__weather-value {
            font-size: 20px;
        }

        .city-item__city-information {
            padding-left: 20px;
        }

        .city-item__city-name {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
`;
