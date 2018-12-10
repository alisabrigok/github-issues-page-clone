import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

import { FILTER_BY_AUTHOR } from '../../organisms/AuthorSelect/constants';
import { FILTER_BY_LABEL } from '../../organisms/LabelSelect/constants';
import { filterIssuesByAuthor } from '../../../shared/services/filter.service';
import { filterIssuesByLabel } from '../../../shared/services/filter.service';

const initialState = {
  issues: [],
  filteredIssues: [],
  error: null,
  authorFilterStatus: false,
  labelFilterStatus: false,
  selectedAuthor: null,
  selectedLabel: null
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
