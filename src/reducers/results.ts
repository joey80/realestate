import { RESULTS } from 'src/actions/constants';

const initialState = {
  searchResults: {
    properties: null,
  },
};

// TODO: clean up these types
// TODO: refactor to switch statement
const Results = (state = initialState, action: { newResults: any; type: string }) => {
  if (action.type === RESULTS.SAVE_RESULTS) {
    return {
      ...state,
      searchResults: {
        ...state.searchResults,
        properties: (state.searchResults.properties = action.newResults),
      },
    };
  }

  return state;
};

export default Results;
