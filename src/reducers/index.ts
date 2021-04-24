import { combineReducers } from 'redux';
import Input from './input';
import Modal from './modal';
import Results from './results';

const rootReducer = combineReducers({
  Input,
  Modal,
  Results,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
