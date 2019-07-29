import { combineReducers } from 'redux';
import Input from './input';
import modalReducer from './modal';
import Results from './results';

export default combineReducers({
    Input,
    modalReducer,
    Results
});