import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';

export const fetchIssues = () => ({
  type: FETCH_ISSUES
});

export const fetchIssuesSuccess = fetchedIssues => ({
  type: FETCH_ISSUES_SUCCESS,
  fetchedIssues
});

export const fetchIssuesFail = error => ({
  type: FETCH_ISSUES_FAIL,
  error
});
