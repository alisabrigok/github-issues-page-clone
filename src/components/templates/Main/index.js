// @flow

import React, { Component } from 'react';
import styles from './Main.module.scss';
import Row from '../../molecules/Row';
import { connect } from 'react-redux';
import PlaceHolderSection from '../../molecules/PlaceHolderSection/index';

type Props = {
  issues: Array<Object>,
  authorFilterStatus: boolean,
  labelFilterStatus: boolean,
  errorStatus: boolean
};

class Main extends Component<Props> {
  generateRows() {
    const { issues } = this.props;
    return issues.map(issue => (
      <Row
        key={issue.issueId}
        number={issue.number}
        createdAt={issue.createdAt}
        from={issue.user.label}
        userId={issue.user.value}
        title={issue.title}
        comments={issue.comments}
        labels={issue.labels}
        url={issue.url}
        assignees={issue.assignees}
      />
    ));
  }

  render() {
    const {
      issues,
      authorFilterStatus,
      labelFilterStatus,
      errorStatus
    } = this.props;

    const isFilterResultEmpty =
      (authorFilterStatus || labelFilterStatus) && !issues.length;
    const placeHolderStatus = isFilterResultEmpty || errorStatus;
    // if placeholder is going to be rendered, remove parent class
    const mainClass = !placeHolderStatus ? styles.main : '';

    const placeHolderSection = placeHolderStatus && (
      <PlaceHolderSection errorStatus={errorStatus} />
    );

    return (
      <main className={mainClass}>
        {this.generateRows()} {placeHolderSection}
      </main>
    );
  }
}

const mapStateToProps = ({ issuesReducer }) => ({
  issues: issuesReducer.filteredIssues,
  authorFilterStatus: issuesReducer.authorFilterStatus,
  labelFilterStatus: issuesReducer.labelFilterStatus,
  errorStatus: issuesReducer.errorStatus
});

export default connect(mapStateToProps)(Main);
