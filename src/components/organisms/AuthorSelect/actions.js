import { SET_AUTHORS, FILTER_BY_AUTHOR } from './constants';

export const setAuthors = authors => {
  return {
    type: SET_AUTHORS,
    authors
  };
};

export const filterByAuthor = selectedAuthor => {
  return {
    type: FILTER_BY_AUTHOR,
    selectedAuthor
  };
};
