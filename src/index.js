import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import api from './api';

import View from './containers/View';

import './normalize.css';

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

ReactDOM.render(
    <Provider store={store}>
        <View />
    </Provider>,
    document.getElementById('root')
);
