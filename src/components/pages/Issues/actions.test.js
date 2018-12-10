import {
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL
} from './constants';
import { fetchIssues, fetchIssuesSuccess, fetchIssuesFail } from './actions';
import { normalizedIssues } from '../../../shared/utilities/test-helpers';

describe('issues page actions', () => {
  it('should create an action to fetch issues', () => {
    const expectedAction = {
      type: FETCH_ISSUES
    };
    expect(fetchIssues()).toEqual(expectedAction);
  });

  it('should create an action for successful issue fetching', () => {
    const expectedAction = {
      type: FETCH_ISSUES_SUCCESS,
      fetchedIssues: normalizedIssues
    };
    expect(fetchIssuesSuccess(normalizedIssues)).toEqual(expectedAction);
  });

  it('should create an action for unsuccessful issue fetching', () => {
    const error = { status: 404, message: 'Not Found' };
    const expectedAction = {
      type: FETCH_ISSUES_FAIL,
      error
    };
    expect(fetchIssuesFail(error)).toEqual(expectedAction);
  });
});
