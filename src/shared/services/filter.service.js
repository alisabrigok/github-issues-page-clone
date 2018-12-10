export const resetAllFilters = state => {
  return {
    ...state,
    filteredIssues: [...state.issues],
    authorFilterStatus: false,
    labelFilterStatus: false
  }
};

export const filterByAuthorId = (issues, authorId) => issues.filter(issue => issue.user.value === authorId);
export const filterByLabelId = (issues, labelId) => issues.filter(issue => issue.labels.some(label => label.id === labelId));

export const filterIssuesByAuthor = (state, selectedAuthor) => {
  if (selectedAuthor) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.labelFilterStatus && state.authorFilterStatus) {
      newFilteredIssues = filterByAuthorId(issues, selectedAuthor.value);
      newFilteredIssues = filterByLabelId(newFilteredIssues, state.selectedLabel.value);
    } else if (state.labelFilterStatus && !state.authorFilterStatus) {
      newFilteredIssues = filterByAuthorId(filteredIssues, selectedAuthor.value);
    } else {
      newFilteredIssues = filterByAuthorId(issues, selectedAuthor.value);
    }

    return {
      ...state,
      filteredIssues: newFilteredIssues,
      authorFilterStatus: true,
      selectedAuthor
    };
  } else {
    if (state.labelFilterStatus) {
      return filterIssuesByLabel(
        { ...state, authorFilterStatus: false },
        state.selectedLabel
      );
    } else {
      return resetAllFilters(state);
    }
  }
};

export const filterIssuesByLabel = (state, selectedLabel) => {
  if (selectedLabel) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.authorFilterStatus && state.labelFilterStatus) {
      newFilteredIssues = filterByLabelId(filteredIssues, selectedLabel.value);
      newFilteredIssues = filterByAuthorId(newFilteredIssues, state.selectedAuthor.value);
    } else if (state.authorFilterStatus && !state.labelFilterStatus) {
      newFilteredIssues = filterByLabelId(filteredIssues, selectedLabel.value);
    } else {
      newFilteredIssues = filterByLabelId(issues, selectedLabel.value);
    }

    return {
      ...state,
      filteredIssues: newFilteredIssues,
      labelFilterStatus: true,
      selectedLabel
    };
  } else {
    if (state.authorFilterStatus) {
      return filterIssuesByAuthor(
        { ...state, labelFilterStatus: false },
        state.selectedAuthor
      );
    } else {
      return resetAllFilters(state);
    }
  }
};