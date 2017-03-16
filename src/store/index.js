import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import appStoreReducers from '../reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = function() {
    return createStore(
        appStoreReducers,
        composeEnhancers(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )));
};

module.exports = appStore;
