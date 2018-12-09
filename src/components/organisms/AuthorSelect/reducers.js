import {
  SET_AUTHORS
} from './constants';

const initialState = {
  authors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return { ...state, authors: action.authors };
    default:
      return { ...state };
  }
};

export default reducer;
