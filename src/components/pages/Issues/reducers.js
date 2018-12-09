import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

import { FILTER_BY_AUTHOR } from '../../organisms/AuthorSelect/constants';
import { FILTER_BY_LABEL } from '../../organisms/LabelSelect/constants';

const initialState = {
  issues: [],
  filteredIssues: [],
  error: null,
  authorFilterStatus: false,
  labelFilterStatus: false,
  selectedAuthor: null,
  selectedLabel: null
};

const filterIssuesByAuthor = (state, selectedAuthor) => {
  if (selectedAuthor) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.labelFilterStatus) {
      newFilteredIssues = filteredIssues.filter(
        issue => issue.user.value === selectedAuthor.value
      );
    } else {
      newFilteredIssues = issues.filter(
        issue => issue.user.value === selectedAuthor.value
      );
    }

    return {
      ...state,
      filteredIssues: newFilteredIssues,
      authorFilterStatus: true,
      selectedAuthor
    };
  } else {
    if (state.labelFilterStatus) {
      return filterIssuesByLabel(
        { ...state, authorFilterStatus: false },
        state.selectedLabel
      );
    } else {
      return {
        ...state,
        filteredIssues: [...state.issues],
        authorFilterStatus: false
      };
    }
  }
};

const filterIssuesByLabel = (state, selectedLabel) => {
  if (selectedLabel) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.authorFilterStatus) {
      newFilteredIssues = filteredIssues.filter(issue =>
        issue.labels.some(label => label.id === selectedLabel.value)
      );
    } else {
      newFilteredIssues = issues.filter(issue =>
        issue.labels.some(label => label.id === selectedLabel.value)
      );
    }

    return {
      ...state,
      filteredIssues: newFilteredIssues,
      labelFilterStatus: true,
      selectedLabel
    };
  } else {
    if (state.authorFilterStatus) {
      return filterIssuesByAuthor(
        { ...state, labelFilterStatus: false },
        state.selectedAuthor
      );
    } else {
      return {
        ...state,
        filteredIssues: [...state.issues],
        labelFilterStatus: false
      };
    }
  }
};

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
    case FILTER_BY_LABEL:
      return filterIssuesByLabel(state, action.selectedLabel);
    default:
      return { ...state };
  }
};

export default reducer;
