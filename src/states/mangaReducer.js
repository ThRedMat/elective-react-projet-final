export const SET_SEARCH = 'SET_SEARCH';

export const initialState = {
  search: '',
};

export const mangasReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state;
  }
}