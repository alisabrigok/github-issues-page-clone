import { SET_AUTHORS, FILTER_BY_AUTHOR } from './constants';
import { setAuthors, filterByAuthor } from './actions';
import { authors } from '../../../shared/utilities/test-helpers';

describe('author select actions', () => {
  it('should create an action to set authors', () => {
    const expectedAction = {
      type: SET_AUTHORS,
      authors
    };
    expect(setAuthors(authors)).toEqual(expectedAction);
  });

  it('should create an action to filter authors', () => {
    const [ selectedAuthor ] = authors;
    const expectedAction = {
      type: FILTER_BY_AUTHOR,
      selectedAuthor
    };
    expect(filterByAuthor(selectedAuthor)).toEqual(expectedAction);
  });
});