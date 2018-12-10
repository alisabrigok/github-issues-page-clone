import reducer from './reducers';
import { SET_AUTHORS } from './constants';
import { authors } from '../../../shared/utilities/test-helpers';

describe('author select reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = { authors: null };
    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should store the authors', () => {
    const actionPayload = { type: SET_AUTHORS, authors };
    const expectedInitialState = { authors };
    expect(reducer(undefined, actionPayload)).toEqual(expectedInitialState);
  });
});
