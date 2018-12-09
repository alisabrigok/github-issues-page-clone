// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from './actions';
import styles from './Issues.module.scss';
import Header from '../../templates/Header';
import Main from '../../templates/Main';

type Props = {
  fetchIssues: () => void
};

class IssuesPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: () => dispatch(fetchIssues())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(IssuesPage);
