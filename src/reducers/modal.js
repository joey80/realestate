const initialState = {
    modal: {
        isVisible: false,
        isLoading: false
    }
};

const Modal = (state = initialState, action) => {
    
    if (action.type === 'SHOW_MODAL') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: true,
                isLoading: true
            }
        }
    }

    if (action.type === 'HIDE_MODAL') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: false,
                isLoading: false
            }
        }
    }

    if (action.type === 'START_LOADING') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: true,
                isLoading: true
            }
        }
    }

    if (action.type === 'STOP_LOADING') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: true,
                isLoading: false
            }
        }
    }

    return state;
}
  
  export default Modal;