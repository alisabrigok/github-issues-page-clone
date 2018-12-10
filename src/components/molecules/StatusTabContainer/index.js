// @flow

import React, { Component } from 'react';
import styles from './StatusTabContainer.module.scss';
import exclamationBlack from '../../../assets/icons/exclamation-black.svg';
import tick from '../../../assets/icons/tick.svg';
import ContentWithIcon from '../../atoms/ContentWithIcon';
import { connect } from 'react-redux';

type Props = {
  issueCount: number
};

class StatusTabContainer extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <ContentWithIcon
          parentClass={styles.open}
          icon={exclamationBlack}
          alt="exclamation icon black"
        >
          {this.props.issueCount} Open
        </ContentWithIcon>
        <ContentWithIcon parentClass={styles.close} icon={tick} alt="tick icon">
          Under Construction...
        </ContentWithIcon>
      </div>
    );
  }
}

const mapStateToProps = ({ issuesReducer }) => ({
  issueCount: issuesReducer.filteredIssues.length
});

export default connect(mapStateToProps)(StatusTabContainer);
