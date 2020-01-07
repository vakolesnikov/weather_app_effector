import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    & .search-interface__overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #000000;
        opacity: 0.6;
        z-index: 0;
    }

    & .search-interface__input-wrapper {
        width: 100%;
        max-width: 600px;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        z-index: 1;
        margin-bottom: 20px;
    }

    & .search-interface__search-city-input {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 18px;
    }

    & .search-interface__clear-button {
        width: 26px;
        height: 26px;
        position: absolute;
        right: 36px;
        top: 37px;
        outline: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    & .search-interface__clear-button-icon {
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 0;
    }

    & .search-interface__cancel-button {
        background-color: white;
        border: none;
        text-transform: UPPERCASE;
        font-weight: 700;
        position: absolute;
        right: 31px;
        bottom: 12px;
        padding: 6px;
        transition: 1s;
        cursor: pointer;
        border-radius: 4px;
        outline: none;
    }

    & .search-interface__cancel-button:hover {
        background-color: #eeeeee;
    }

    & .search-interface__cancel-button:active {
        background-color: #9a9999;
    }
`;
