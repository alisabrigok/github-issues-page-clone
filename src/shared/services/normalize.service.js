import { uniqBy, isEmpty } from 'lodash';
import { flatten } from '../utilities/utility';

// github issues api counts pull requests as issue, so skip them and then shape the data
export const normalizeIssues = response =>
  response.data
    .filter(issue => isEmpty(issue.pull_request))
    .map(issue => ({
      assignees: normalizeAssignees(issue.assignees),
      comments: issue.comments,
      createdAt: issue.created_at,
      issueId: issue.id,
      labels: issue.labels,
      number: issue.number,
      title: issue.title,
      url: issue.html_url,
      user: normalizeUser(issue.user)
    }));

// value / label keys are used by select library
// i couldn't remember/find the way to change these used keys, that's why the unconventional naming
export const normalizeUser = user => ({
  value: user.id,
  label: user.login,
  avatarUrl: user.avatar_url
});

export const normalizeUsers = issues =>
  uniqBy(issues.map(issue => issue.user), 'value');

export const normalizeAssignees = assignees =>
  assignees.map(assignee => ({
    id: assignee.id,
    username: assignee.login,
    avatarUrl: assignee.avatar_url
  }));

// nestedLabels are array of array of objects. so flattenning is for to get just array of objs.
export const normalizeLabels = issues => {
  const nestedLabels = issues.map(issue => issue.labels);
  const uniqueFlattenLabels = uniqBy(flatten(nestedLabels), 'id');

  return uniqueFlattenLabels.map(label => ({
    value: label.id,
    label: label.name,
    color: label.color
  }));
};
