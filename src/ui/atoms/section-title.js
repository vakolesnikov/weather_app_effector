import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitleWrapper = styled.div`
    padding-bottom: 10px;
    font-size: 20px;
    font-style: italic;
    color: #929090;

    &::after {
        content: '';
        display: block;
        width: 100%;
        border: 1px solid #929090;
    }
`;

const SectionTitle = ({ title }) => <SectionTitleWrapper>{title}</SectionTitleWrapper>;

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export { SectionTitle };
