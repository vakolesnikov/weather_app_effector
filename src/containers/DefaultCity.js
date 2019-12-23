import { connect } from 'react-redux';

import DefaultCity from '../components/DefaultCity';

const mapStateToProps = state => ({
    defaultCity: state.defaultCity,
    isLoadUserLocation: state.isLoadUserLocation,
    isErrorLoadUserLocation: state.isErrorLoadUserLocation
});

export default connect(mapStateToProps)(DefaultCity);
