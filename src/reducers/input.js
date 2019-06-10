const initialState = {
    errors: {
        streetAddress: false,
        city: false,
        zipCode: false
    },
    searchLocation: {
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null
    }
};

const Input = (state = initialState, action) => {
    
    if (action.type === 'SHOW_INPUT_ERROR') {
        return {
            ...state,
            errors: {
                ...state.errors,
                [action.errorName]: state.errors[action.errorName] = true
            }
        }
    }

    if (action.type === 'HIDE_INPUT_ERROR') {
        return {
            ...state,
            errors: {
                ...state.errors,
                [action.errorName]: state.errors[action.errorName] = false
            }
        }
    }

    if (action.type === 'SAVE_VALUE') {
        return {
            ...state,
            searchLocation: {
                ...state.searchLocation,
                [action.stateName]: state.searchLocation[action.stateName] = action.stateValue
            }
        }
    }

    if (action.type === 'CLEAR_SEARCH_VALUES') {
        return {
            ...state,
            searchLocation: {
                ...state.searchLocation,
                streetAddress: null,
                city: null,
                state: null,
                zipCode: null
            }
        }
    }

    return state;
}
  
  export default Input;