import styled from 'styled-components';

export default styled.div`
    width: 100%;
    max-width: 600px;

    & .favorites-cities__section-title::after {
        content: '';
        display: block;
        width: 100%;
        border: 1px solid #929090;
    }
`;
