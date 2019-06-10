const initialState = {
    modal: {
        isVisible: false
    }
};

const Modal = (state = initialState, action) => {
    
    if (action.type === 'SHOW_MODAL') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: true
            }
        }
    }

    if (action.type === 'HIDE_MODAL') {
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: false
            }
        }
    }

    return state;
}
  
  export default Modal;