export const filterIssuesByAuthor = (state, selectedAuthor) => {
  if (selectedAuthor) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.labelFilterStatus) {
      newFilteredIssues = filteredIssues.filter(
        issue => issue.user.value === selectedAuthor.value
      );
    } else {
      newFilteredIssues = issues.filter(
        issue => issue.user.value === selectedAuthor.value
      );
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
      return {
        ...state,
        filteredIssues: [...state.issues],
        authorFilterStatus: false
      };
    }
  }
};

export const filterIssuesByLabel = (state, selectedLabel) => {
  if (selectedLabel) {
    const { issues, filteredIssues } = state;
    let newFilteredIssues;

    if (state.authorFilterStatus) {
      newFilteredIssues = filteredIssues.filter(issue =>
        issue.labels.some(label => label.id === selectedLabel.value)
      );
    } else {
      newFilteredIssues = issues.filter(issue =>
        issue.labels.some(label => label.id === selectedLabel.value)
      );
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
      return {
        ...state,
        filteredIssues: [...state.issues],
        labelFilterStatus: false
      };
    }
  }
};