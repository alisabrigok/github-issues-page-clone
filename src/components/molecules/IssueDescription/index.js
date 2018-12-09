// flow

import React, { Component } from 'react';
import styles from './IssueDescription.module.scss';
import moment from 'moment';

type Props = {
  title: string,
  number: string,
  createdAt: string,
  from: string,
  url: string,
  labels: Array<Object>
};

class IssueDescription extends Component<Props> {
  generateLabel() {
    const { labels } = this.props;
    return labels.map(label => (
      <span key={label.id} className={styles.label} style={{backgroundColor: `#${label.color}`}}>{label.name}</span>
    ))
  }

  getDateDiffFromNow() {
    return moment(this.props.createdAt).fromNow();
  }

  render() {
    const { url, title, number, from } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleGroup}>
           <a className={styles.title} href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          {this.generateLabel()}
        </div>
        <div className={styles.info}>
          #{number} opened {this.getDateDiffFromNow()} by
          <span className={styles.from}> {from}</span>
        </div>
      </div>
    );
  }
}

export default IssueDescription;
