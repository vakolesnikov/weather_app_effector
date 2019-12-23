import React from 'react';
import PropTypes from 'prop-types';

import ClearIcon from '../../icons/Clear';
import FoundCities from '../FoundCities';

import './index.css';

class SearchInterface extends React.Component {
    static propTypes = {
        actionSearchCity: PropTypes.func.isRequired,
        actionRemoveCitiesFound: PropTypes.func.isRequired,
        actionAddCity: PropTypes.func.isRequired,
        handleCloseSearchInterface: PropTypes.func.isRequired,
        citiesFound: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    constructor(props) {
        super(props);

        this.state = { cityValue: '' };
    }

    handleFindCity = e => {
        const { actionSearchCity } = this.props;
        const { value } = e.target;

        this.setState({
            cityValue: value
        });
        actionSearchCity(value);
    };

    handleClearSearchInput = () => {
        const { actionRemoveCitiesFound } = this.props;

        this.setState({ cityValue: '' });
        actionRemoveCitiesFound();
    };

    handleCloseSearchInterface = () => {
        const { handleCloseSearchInterface, actionRemoveCitiesFound } = this.props;

        handleCloseSearchInterface();
        actionRemoveCitiesFound();
    };

    render() {
        const { citiesFound, actionAddCity } = this.props;
        const { cityValue } = this.state;

        return (
            <div className="search-interface">
                <div className="search-interface__overlay" />
                <div className="search-interface__input-wrapper">
                    <input
                        onChange={this.handleFindCity}
                        value={cityValue}
                        className="search-interface__search-city-input"
                        placeholder="Type City name"
                    />
                    <button
                        type="button"
                        onClick={this.handleClearSearchInput}
                        className="search-interface__clear-button"
                    >
                        <ClearIcon className="search-interface__clear-button-icon" />
                    </button>

                    <button
                        type="button"
                        className="search-interface__cancel-button"
                        onClick={this.handleCloseSearchInterface}
                    >
                        Close
                    </button>
                </div>
                {!!citiesFound.length && (
                    <FoundCities
                        citiesFound={citiesFound}
                        actionAddCity={actionAddCity}
                        handleCloseSearchInterface={this.handleCloseSearchInterface}
                    />
                )}
            </div>
        );
    }
}

export default SearchInterface;
