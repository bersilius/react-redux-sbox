import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import appStore from './store';
import initStore from './store/init';
import Main from './components/main';

const store = appStore();
initStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
