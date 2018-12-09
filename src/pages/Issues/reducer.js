import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

import { FILTER_BY_AUTHOR } from '../../components/organisms/AuthorSelect/constants';

const initialState = {
  issues: [],
  filteredIssues: [],
  error: null,
  authorFilterStatus: false,
  labelFilterStatus: false,
};

const filterIssuesByAuthor = (state, selectedAuthor) => {
  if (selectedAuthor) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.labelFilterStatus) {
      newFilteredIssues = filteredIssues.filter(issue => issue.user.value === selectedAuthor.value);
    } else {
      newFilteredIssues = issues.filter(issue => issue.user.value === selectedAuthor.value);
    }
    
    return {
      ...state,
      filteredIssues: newFilteredIssues,
      authorFilterStatus: true
    };
  } else {
    if (state.labelFilterStatus) {
      return { 
        ...state,
        authorFilterStatus: false
      };
    } else {
      return { 
        ...state, 
        filteredIssues: [...state.issues],
        authorFilterStatus: false
      };
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state };
    case FETCH_ISSUES_SUCCESS:
      return { ...state, issues: action.data, filteredIssues: action.data };
    case FETCH_ISSUES_FAIL:
      return { ...state, error: action.error };
    case FILTER_BY_AUTHOR:
      return filterIssuesByAuthor(state, action.selectedAuthor);
    default:
      return { ...state };
  }
};

export default reducer;
