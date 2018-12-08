// @flow

import React, { Component } from 'react';
import styles from './Issues.module.scss';
import Header from '../../components/organisms/Header';
import Main from '../../components/organisms/Main';

type Props = {};

class IssuesPage extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default IssuesPage;