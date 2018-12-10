import { SET_AUTHORS, FILTER_BY_AUTHOR } from './constants';

export const setAuthors = authors => ({
  type: SET_AUTHORS,
  authors
});

export const filterByAuthor = selectedAuthor => ({
  type: FILTER_BY_AUTHOR,
  selectedAuthor
});
