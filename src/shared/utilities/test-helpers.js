export const labels = [
  { value: 554733913, label: 'issue: question', color: '009900' }
];

export const authors = [
  {
    value: 693791,
    label: 'emibcn',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/693791?v=4'
  }
];

export const normalizedIssues = [
  {
    assignees: [
      {
        id: 123,
        username: 'emibcn',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/693791?v=4'
      }
    ],
    comments: 3,
    createdAt: '2018-12-10T15:11:08Z',
    issueId: 388969936,
    labels: [
      {
        color: '009900',
        id: 554733913,
        name: 'issue: bug'
      }
    ],
    number: 6006,
    title: 'This is a super big bug',
    url: 'https://github.com/facebook/create-react-app/issues/6006',
    user: {
      value: 693791,
      label: 'emibcn',
      avatarUrl: 'https://github.com/facebook/create-react-app/issues/6008'
    }
  },
  {
    assignees: [
      {
        id: 123,
        username: 'emibcn',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/693791?v=4'
      }
    ],
    comments: 5,
    createdAt: '2018-12-08T23:35:07Z',
    issueId: 389345208,
    labels: [
      {
        color: '009900',
        id: 409579052,
        name: 'issue: proposal'
      }
    ],
    number: 6008,
    title: 'This is a super inituative feature request',
    url: 'https://github.com/facebook/create-react-app/issues/6008',
    user: {
      value: 123,
      label: 'asd',
      avatarUrl: 'https://github.com/facebook/create-react-app/issues/6008'
    }
  }
];

export const issuesInitialState = {
  issues: [],
  filteredIssues: [],
  errorStatus: false,
  authorFilterStatus: false,
  labelFilterStatus: false,
  selectedAuthor: null,
  selectedLabel: null
};
