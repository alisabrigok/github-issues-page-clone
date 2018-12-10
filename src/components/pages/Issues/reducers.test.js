import reducer from './reducers';
import { FETCH_ISSUES, FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAIL } from './constants';
import { issuesInitialState, normalizedIssues } from '../../../shared/utilities/test-helpers';
import { RESET_FILTERS } from '../../molecules/FilterResetSection/constants';

describe('issues page reducer', () => {
  it('should return the initial state', () => {
    const actionPayload = { type: FETCH_ISSUES };

    expect(reducer(undefined, {})).toEqual(issuesInitialState);
    expect(reducer(issuesInitialState, actionPayload)).toEqual(issuesInitialState);
  });

  it('should store the fetched and normalized issues to issues and filtered issues objects', () => {
    const actionPayload = { type: FETCH_ISSUES_SUCCESS, fetchedIssues: normalizedIssues };
    const expectedState = {...issuesInitialState, issues: normalizedIssues, filteredIssues: normalizedIssues, errorStatus: false};
    expect(reducer(issuesInitialState, actionPayload)).toEqual(expectedState);
  });

  it('should set the error status flag to true', () => {
    const actionPayload = { type: FETCH_ISSUES_FAIL, error: {} };
    const expectedState = {...issuesInitialState, errorStatus: true};
    expect(reducer(issuesInitialState, actionPayload)).toEqual(expectedState);
  });

  it('should copy issues to filtered issues, set selection objects to null and set filter statuses to false', () => {
    const actionPayload = { type: RESET_FILTERS };
    const filterAppliedIssuesState = {
      issues: [...normalizedIssues],
      filteredIssues: [],
      authorFilterStatus: true,
      labelFilterStatus: true,
      selectedAuthor: {},
      selectedLabel: {}
    }
    const expectedState = {
      issues: [...normalizedIssues],
      filteredIssues: [...normalizedIssues],
      authorFilterStatus: false,
      labelFilterStatus: false,
      selectedAuthor: null,
      selectedLabel: null
    };
    expect(reducer(filterAppliedIssuesState, actionPayload)).toEqual(expectedState);
  });
});