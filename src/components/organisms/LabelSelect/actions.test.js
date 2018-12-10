import { SET_LABELS, FILTER_BY_LABEL } from './constants';
import { setLabels, filterByLabel } from './actions';
import { labels } from '../../../shared/utilities/test-helpers';

describe('label select actions', () => {
  it('should create an action to set labels', () => {
    const expectedAction = {
      type: SET_LABELS,
      labels
    };
    expect(setLabels(labels)).toEqual(expectedAction);
  });

  it('should create an action to filter labels', () => {
    const [ selectedLabel ] = labels;
    const expectedAction = {
      type: FILTER_BY_LABEL,
      selectedLabel
    };
    expect(filterByLabel(selectedLabel)).toEqual(expectedAction);
  });
});