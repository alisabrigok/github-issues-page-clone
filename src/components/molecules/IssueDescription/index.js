// flow

import React, { Component } from 'react';
import styles from './IssueDescription.module.scss';
import { filterByAuthor } from '../../organisms/AuthorSelect/actions';
import { filterByLabel } from '../../organisms/LabelSelect/actions';
import moment from 'moment';
import { connect } from 'react-redux';

type Props = {
  title: string,
  number: string,
  createdAt: string,
  from: string,
  url: string,
  userId: string,
  labels: Array<Object>,
  filterByAuthor: (x: Object) => void,
  filterByLabel: (x: Object) => void
};

class IssueDescription extends Component<Props> {
  generateLabel() {
    const { labels } = this.props;
    return labels.map(label => (
      <span
        key={label.id}
        className={styles.label}
        style={{ backgroundColor: `#${label.color}` }}
        onClick={this.onLabelClick(label.id)}
      >
        {label.name}
      </span>
    ));
  }

  // get humanized time that passed since createdAt
  getDateDiffFromNow() {
    return moment(this.props.createdAt).fromNow();
  }

  onUserNameClick = () => {
    const { userId, filterByAuthor } = this.props;
    filterByAuthor({ value: userId });
  };

  onLabelClick = labelId => () => {
    const { filterByLabel } = this.props;
    filterByLabel({ value: labelId });
  };

  render() {
    const { url, title, number, from } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleGroup}>
          <a
            className={styles.title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          {this.generateLabel()}
        </div>
        <div className={styles.info}>
          #{number} opened {this.getDateDiffFromNow()} by
          <span className={styles.from} onClick={this.onUserNameClick}>
            {' '}
            {from}
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByAuthor: selectedAuthor => dispatch(filterByAuthor(selectedAuthor)),
    filterByLabel: selectedAuthor => dispatch(filterByLabel(selectedAuthor))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(IssueDescription);
