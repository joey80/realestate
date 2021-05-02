import { ModalReducer } from './types';

const initialState = {
  modal: {
    isLoading: false,
    isVisible: false,
  },
};

const Modal: ModalReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isVisible: true,
          isLoading: true,
        },
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isVisible: false,
          isLoading: false,
        },
      };
    }

    case 'START_LOADING': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isVisible: true,
          isLoading: true,
        },
      };
    }

    case 'STOP_LOADING': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isVisible: true,
          isLoading: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default Modal;
