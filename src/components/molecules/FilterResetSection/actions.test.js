import { RESET_FILTERS } from './constants';
import { resetFilters } from './actions';

describe('filter reset section actions', () => {
  it('should create an action to reset filters', () => {
    const expectedAction = {
      type: RESET_FILTERS,
    };
    expect(resetFilters()).toEqual(expectedAction);
  });
});