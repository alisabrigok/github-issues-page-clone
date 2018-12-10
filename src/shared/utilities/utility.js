export const flatten = element =>
  Array.isArray(element) ? [].concat(...element.map(flatten)) : element;