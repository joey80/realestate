import { MODAL } from 'src/actions/constants';

const initialState = {
  modal: {
    isVisible: false,
    isLoading: false,
  },
};

// TODO: clean up these types
// TODO: refactor to switch statement
const Modal = (state = initialState, action: { type: string }) => {
  if (action.type === MODAL.SHOW_MODAL) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isVisible: true,
        isLoading: true,
      },
    };
  }

  if (action.type === MODAL.HIDE_MODAL) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isVisible: false,
        isLoading: false,
      },
    };
  }

  if (action.type === MODAL.START_LOADING) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isVisible: true,
        isLoading: true,
      },
    };
  }

  if (action.type === MODAL.STOP_LOADING) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isVisible: true,
        isLoading: false,
      },
    };
  }

  return state;
};

export default Modal;
