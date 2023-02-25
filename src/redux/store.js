import { createStore, applyMiddleware } from 'redux';
import { rootStore } from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxThunk from 'redux-thunk'

const store = createStore(rootStore, composeWithDevTools(applyMiddleware(logger, reduxThunk)));

export default store;