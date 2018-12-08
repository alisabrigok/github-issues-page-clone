import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

export const fetchIssues = () => {
  return {
    type: FETCH_ISSUES
  };
};

export const fetchIssuesSuccess = data => {
  return {
    type: FETCH_ISSUES_SUCCESS,
    data
  };
};

export const fetchIssuesFail = error => {
  return {
    type: FETCH_ISSUES_FAIL,
    error
  };
};
