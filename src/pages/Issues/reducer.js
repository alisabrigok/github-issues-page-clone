import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

const initialState = {
  data: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state };
    case FETCH_ISSUES_SUCCESS:
      return { ...state, data: action.data };
    case FETCH_ISSUES_FAIL:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

export default reducer;
