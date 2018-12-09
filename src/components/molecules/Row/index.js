// @flow

import React, { Component } from 'react';
import styles from './Row.module.scss';
import commentIcon from '../../../assets/icons/comment.svg';
import exclamationGreen from '../../../assets/icons/exclamation-green.svg';
import IssueDescription from '../IssueDescription';
import ContentWithIcon from '../../atoms/ContentWithIcon/index';

type Props = {
  comments: string,
  url: string
};

class Row extends Component<Props> {
  render() {
    const { comments, url } = this.props;

    return (
      <section className={styles.row}>
        <ContentWithIcon
          parentClass={styles.notice}
          icon={exclamationGreen}
          alt="exclamation icon green"
        />
        <IssueDescription {...this.props} />
        {!!comments && (
          <ContentWithIcon
            parentClass={styles.comment}
            childClass={styles.commentIcon}
            icon={commentIcon}
            alt="comment icon"
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
        )}
      </section>
    );
  }
}

export default Row;
