import { connect } from 'react-redux';
import { addCity, searchCity } from '../asyncActions';
import { actionRemoveCitiesFound } from '../actions';

import SearchInterface from '../components/SearchInterface';

const mapStateToProps = state => ({
    citiesFound: state.citiesFound
});

const mapDispatchToProps = dispatch => ({
    actionSearchCity: city => dispatch(searchCity(city)),
    actionRemoveCitiesFound: () => dispatch(actionRemoveCitiesFound()),
    actionAddCity: id => dispatch(addCity(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInterface);
