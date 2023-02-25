import {combineReducers} from 'redux';
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './iceCream/IceCreamReducer';
import userReducer from './user/userReducer';

export const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});
