import { Action, InitialState } from './types';

const initialState = {
  errors: {
    city: false,
    state: false,
    streetAddress: false,
    zipCode: false,
  },
  searchLocation: {
    city: '',
    state: 'Select A State',
    streetAddress: '',
    zipCode: '',
  },
};

const Input = (state: InitialState = initialState, action: Action) => {
  const { type } = action;

  switch (type) {
    case 'SHOW_INPUT_ERROR': {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.errorName]: (state.errors[action.errorName] = true),
        },
      };
    }

    case 'HIDE_INPUT_ERROR': {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.errorName]: (state.errors[action.errorName] = false),
        },
      };
    }

    case 'SAVE_VALUE': {
      return {
        ...state,
        searchLocation: {
          ...state.searchLocation,
          [action.stateName]: (state.searchLocation[action.stateName] = action.stateValue),
        },
      };
    }

    case 'CLEAR_SEARCH_VALUES': {
      return {
        ...state,
        searchLocation: {
          ...state.searchLocation,
          streetAddress: '',
          city: '',
          state: 'Select A State',
          zipCode: '',
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default Input;
