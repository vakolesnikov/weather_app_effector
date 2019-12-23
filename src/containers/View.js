import { connect } from 'react-redux';
import { initApp } from '../asyncActions';

import View from '../components/View';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    actionInitApp: () => dispatch(initApp())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);
