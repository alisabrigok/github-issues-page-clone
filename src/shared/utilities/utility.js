// converting deeply nested array to get just an array of values
export const flatten = element =>
  Array.isArray(element) ? [].concat(...element.map(flatten)) : element;
