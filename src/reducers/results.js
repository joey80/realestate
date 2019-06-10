const initialState = {
    searchResults: {
        properties: null
    }
};

const Results = (state = initialState, action) => {
    
    if (action.type === 'SAVE_RESULTS') {
        return {
            ...state,
            searchResults: {
                ...state.searchResults,
                properties: state.searchResults.properties = action.newResults
            }
        }
    }

    return state;
}
  
export default Results;