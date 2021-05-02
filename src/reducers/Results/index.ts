import { ResultsReducer } from './types';

const initialState = {
  searchResults: {
    properties: null,
  },
};

const Results: ResultsReducer = (state = initialState, action) => {
  const { newResults, type } = action;

  switch (type) {
    case 'SAVE_RESULTS': {
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          properties: (state.searchResults.properties = newResults),
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default Results;
