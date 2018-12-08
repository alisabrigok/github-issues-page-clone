// @flow

import React, { Component } from 'react';
import styles from './Row.module.scss';
import commentIcon from '../../../assets/icons/comment.svg';
import exclamationGreen from '../../../assets/icons/exclamation-green.svg';
import IssueDescription from '../IssueDescription';
import ContentWithIcon from '../../atoms/ContentWithIcon/index';

type Props = {
  issueNumber: string,
  date: string,
  from: string,
  issueTitle: string,
  commentNumber: string
};

class Row extends Component<Props> {
  render() {
    return (
      <section className={styles.row}>
        <ContentWithIcon
          parentClass={styles.notice}
          icon={exclamationGreen}
          alt="exclamation icon green"
        />
        <IssueDescription
          issueNumber={this.props.issueNumber}
          date={this.props.date}
          from={this.props.from}
          title={this.props.issueTitle}
        />
        <ContentWithIcon
          parentClass={styles.comment}
          childClass={styles.commentIcon}
          icon={commentIcon}
          alt="comment icon"
        >
          <span className={styles.commentNumber}>
            {this.props.commentNumber}
          </span>
        </ContentWithIcon>
      </section>
    );
  }
}

export default Row;
