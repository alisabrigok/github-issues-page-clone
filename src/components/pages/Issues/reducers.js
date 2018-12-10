import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

import { FILTER_BY_AUTHOR } from '../../organisms/AuthorSelect/constants';
import { FILTER_BY_LABEL } from '../../organisms/LabelSelect/constants';
import { RESET_FILTERS } from '../../molecules/FilterResetSection/constants';
import { authorFilterService, labelFilterService, resetFiltersService } from '../../../shared/services/filter.service';

const initialState = {
  issues: [],
  filteredIssues: [],
  errorStatus: false,
  authorFilterStatus: false,
  labelFilterStatus: false,
  selectedAuthor: null,
  selectedLabel: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state, errorStatus: false };
    case FETCH_ISSUES_SUCCESS:
      return { ...state, issues: action.fetchedIssues, filteredIssues: action.fetchedIssues, errorStatus: false };
    case FETCH_ISSUES_FAIL:
      return { ...state, errorStatus: true };
    case FILTER_BY_AUTHOR:
      return authorFilterService(state, action.selectedAuthor);
    case FILTER_BY_LABEL:
      return labelFilterService(state, action.selectedLabel);
    case RESET_FILTERS:
      return resetFiltersService(state);
    default:
      return { ...state };
  }
};

export default reducer;
