import {
  SET_LABELS
} from './constants';

const initialState = {
  labels: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LABELS:
      return { ...state, labels: action.labels };
    default:
      return { ...state };
  }
};

export default reducer;
