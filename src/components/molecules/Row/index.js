// flow

import React, { Component } from 'react';
import styles from './Row.module.scss';
import commentIcon from '../../../assets/icons/comment.svg';
import exclamationGreen from '../../../assets/icons/exclamation-green.svg';
import IssueDescription from '../IssueDescription';
import ContentWithIcon from '../../atoms/ContentWithIcon/index';

type Props = {
  comments: string,
  url: string,
  assignees: Array<Object>
};

class Row extends Component<Props> {
  generateAssignees() {
    const { assignees } = this.props;
    return assignees.map(assignee => (
      <img
        className={styles.assignee}
        key={assignee.id}
        src={assignee.avatarUrl}
        alt={`@${assignee.username}`}
      />
    ));
  }

  render() {
    const { comments, url, assignees } = this.props;

    return (
      <section className={styles.row}>
        <ContentWithIcon
          parentClass={styles.notice}
          icon={exclamationGreen}
          alt="exclamation icon green"
        />
        <IssueDescription {...this.props} />
        <div className={styles.assignees}>
          {assignees && this.generateAssignees()}
        </div>
        {!!comments ? (
          <ContentWithIcon
            parentClass={styles.comment}
            imgClass={styles.commentIcon}
            linkClass={styles.commentNumber}
            icon={commentIcon}
            alt="comment icon"
            link={url}
          >
            <a
              className={styles.commentNumber}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {comments}
            </a>
          </ContentWithIcon>
        ) : (
          <div className={styles.placeholder} />
        )}
      </section>
    );
  }
}

export default Row;
