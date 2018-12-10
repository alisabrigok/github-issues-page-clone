import { uniqBy } from 'lodash';
import { flatten } from '../utilities/utility';

export const getIssues = response =>
  response.data.map(issue => ({
    assignee: issue.assignee,
    assignees: issue.assignees,
    comments: issue.comments,
    createdAt: issue.created_at,
    issueId: issue.id,
    labels: issue.labels,
    number: issue.number,
    title: issue.title,
    url: issue.html_url,
    user: getUser(issue)
  }));

export const getUser = issue => ({
  value: issue.user.id,
  label: issue.user.login,
  avatarUrl: issue.user.avatar_url
});

export const getUsers = issues =>
  uniqBy(issues.map(issue => issue.user), 'value');

export const getLabels = issues => {
  const nestedLabels = issues.map(issue => issue.labels);
  const uniqueFlattenLabels = uniqBy(flatten(nestedLabels), 'id');

  return uniqueFlattenLabels.map(label => ({
    value: label.id,
    label: label.name,
    color: label.color
  }));
};
