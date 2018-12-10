export const filterIssuesByAuthorId = (issues, selectedAuthor) =>
  selectedAuthor
    ? issues.filter(issue => issue.user.value === selectedAuthor.value)
    : [...issues];

// since each issue contains an array of labels, the labels are also iterated
export const filterIssuesByLabelId = (issues, selectedLabel) =>
  selectedLabel
    ? issues.filter(issue =>
        issue.labels.some(label => label.id === selectedLabel.value)
      )
    : [...issues];

export const authorFilterService = (state, selectedAuthor = null) => {
  // the filter functions return the issues if no selection is made, therefore labels can also safely be filtered
  let filteredIssues = filterIssuesByAuthorId(state.issues, selectedAuthor);

  if (state.labelFilterStatus) {
    filteredIssues = filterIssuesByLabelId(filteredIssues, state.selectedLabel);
  }

  return {
    ...state,
    filteredIssues,
    authorFilterStatus: !!selectedAuthor,
    selectedAuthor
  };
};

export const labelFilterService = (state, selectedLabel = null) => {
  let filteredIssues = filterIssuesByLabelId(state.issues, selectedLabel);

  if (state.authorFilterStatus) {
    filteredIssues = filterIssuesByAuthorId(
      filteredIssues,
      state.selectedAuthor
    );
  }

  return {
    ...state,
    filteredIssues,
    labelFilterStatus: !!selectedLabel,
    selectedLabel
  };
};

export const resetFiltersService = state => ({
  ...state,
  filteredIssues: [...state.issues],
  authorFilterStatus: false,
  labelFilterStatus: false,
  selectedAuthor: null,
  selectedLabel: null
});
