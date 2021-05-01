import { combineReducers } from 'redux';
import Input from './Input';
import Modal from './Modal';
import Results from './Results';

const rootReducer = combineReducers({
  Input,
  Modal,
  Results,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
