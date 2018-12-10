import { uniqBy, isEmpty } from 'lodash';
import { flatten } from '../utilities/utility';

export const normalizeIssues = response =>
  response.data
  .filter(issue => isEmpty(issue.pull_request))
  .map(issue => ({
    assignee: issue.assignee,
    assignees: issue.assignees,
    comments: issue.comments,
    createdAt: issue.created_at,
    issueId: issue.id,
    labels: issue.labels,
    number: issue.number,
    title: issue.title,
    url: issue.html_url,
    user: normalizeUser(issue)
  }));

export const normalizeUser = issue => ({
  value: issue.user.id,
  label: issue.user.login,
  avatarUrl: issue.user.avatar_url
});

export const normalizeUsers = issues =>
  uniqBy(issues.map(issue => issue.user), 'value');

export const normalizeLabels = issues => {
  const nestedLabels = issues.map(issue => issue.labels);
  const uniqueFlattenLabels = uniqBy(flatten(nestedLabels), 'id');

  return uniqueFlattenLabels.map(label => ({
    value: label.id,
    label: label.name,
    color: label.color
  }));
};
