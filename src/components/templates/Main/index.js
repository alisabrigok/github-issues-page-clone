// @flow

import React, { Component } from 'react';
import styles from './Main.module.scss';
import Row from '../../molecules/Row';
import { connect } from 'react-redux';

type Props = {
  issues: Array<Object>
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
        title={issue.title} 
        comments={issue.comments} 
        labels={issue.labels} 
        url={issue.url}
      />
    ))
  }

  render() {
    return (
      <main className={styles.main}>
        {this.generateRows()}
      </main>
    );
  }
}

const mapStateToProps = ({ issuesReducer }) => ({
  issues: issuesReducer.filteredIssues
})

export default connect(mapStateToProps)(Main);