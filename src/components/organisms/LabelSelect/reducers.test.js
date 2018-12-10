import reducer from './reducers';
import { SET_LABELS } from './constants';
import { labels } from '../../../shared/utilities/test-helpers';

describe('label select reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = { labels: null };
    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should store the issue labels', () => {
    const actionPayload = { type: SET_LABELS, labels };
    const expectedInitialState = { labels };
    expect(reducer(undefined, actionPayload)).toEqual(expectedInitialState);
  });
});