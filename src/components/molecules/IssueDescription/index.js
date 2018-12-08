// @flow

import React, { Component } from 'react';
import styles from './IssueDescription.module.scss';

type Props = {
  title: string,
  issueNumber: string,
  date: string,
  from: string
};

class IssueDescription extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.info}>
          {this.props.issueNumber} opened {this.props.date} ago by
          <span className={styles.from}> {this.props.from}</span>
        </div>
      </div>
    );
  }
}

export default IssueDescription;
