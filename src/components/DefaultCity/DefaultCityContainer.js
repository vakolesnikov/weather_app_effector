import styled from 'styled-components';

export default styled.div`
    max-width: 600px;
    width: 100%;
    margin-bottom: 40px;

    & .default-city__section-title {
        color: #929090;
        font-style: italic;
        font-size: 20px;
        padding-bottom: 10px;
    }

    & .default-city__section-title::after {
        content: '';
        display: block;
        width: 100%;
        border: 1px solid #929090;
    }

    & .default-city__load-error {
        text-align: center;
        color: #ff0000;
    }
`;
