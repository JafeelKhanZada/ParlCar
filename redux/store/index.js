import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import Reducer from '../reducer';
module.exports = createStore(Reducer, compose(applyMiddleware(thunk, logger)));
