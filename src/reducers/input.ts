import { INPUT } from 'src/actions/constants';

const initialState = {
  errors: {
    streetAddress: false,
    city: false,
    zipCode: false,
  },
  searchLocation: {
    streetAddress: null,
    city: null,
    state: 'Select A State',
    zipCode: null,
  },
};

const Input = (
  // TODO: clean up these types
  // TODO: refactor to switch statement
  state: { [key: string]: any } = initialState,
  action: { errorName: string; stateName: string; stateValue: string; type: string }
) => {
  if (action.type === INPUT.SHOW_INPUT_ERROR) {
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.errorName]: (state.errors[action.errorName] = true),
      },
    };
  }

  if (action.type === INPUT.HIDE_INPUT_ERROR) {
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.errorName]: (state.errors[action.errorName] = false),
      },
    };
  }

  if (action.type === INPUT.SAVE_VALUE) {
    return {
      ...state,
      searchLocation: {
        ...state.searchLocation,
        [action.stateName]: (state.searchLocation[action.stateName] = action.stateValue),
      },
    };
  }

  if (action.type === INPUT.CLEAR_SEARCH_VALUES) {
    return {
      ...state,
      searchLocation: {
        ...state.searchLocation,
        streetAddress: null,
        city: null,
        state: 'Select A State',
        zipCode: null,
      },
    };
  }

  return state;
};

export default Input;