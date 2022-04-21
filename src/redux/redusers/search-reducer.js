const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";

const initialState = {
  searchText: ""
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text
      }
      
    default:
      return state;
  }
} 

export const updateSearchTextCreator = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  text: text
})

export default searchReducer;