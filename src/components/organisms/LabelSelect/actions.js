import { SET_LABELS, FILTER_BY_LABEL } from './constants';

export const setLabels = labels => {
  return {
    type: SET_LABELS,
    labels
  };
};

export const filterByLabel = selectedLabel => {
  return {
    type: FILTER_BY_LABEL,
    selectedLabel
  };
};
