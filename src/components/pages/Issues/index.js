// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from './actions';
import styles from './Issues.module.scss';
import Header from '../../templates/Header';
import Main from '../../templates/Main';
import FilterResetSection from '../../molecules/FilterResetSection/index';

type Props = {
  fetchIssues: () => void,
  authorFilterStatus: boolean,
  labelFilterStatus: boolean
};

class IssuesPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    const { authorFilterStatus, labelFilterStatus } = this.props;

    return (
      <div className={styles.container}>
        {(authorFilterStatus || labelFilterStatus) && (
        <FilterResetSection />
        )}
        <Header />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    fetchIssues: () => dispatch(fetchIssues())
});

const mapStateToProps = ({ issuesReducer }) => ({
  authorFilterStatus: issuesReducer.authorFilterStatus,
  labelFilterStatus: issuesReducer.labelFilterStatus
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesPage);
