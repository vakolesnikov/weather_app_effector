import { connect } from 'react-redux';
import { removeCity } from '../asyncActions';

import FavoritesCities from '../components/FavoritesCities';

const mapStateToProps = state => ({
    citiesFavorites: state.citiesFavorites
});

const mapDispatchToProps = dispatch => ({
    actionRemoveCity: id => dispatch(removeCity(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesCities);
