// @flow

import React, { Component } from 'react';
import styles from './App.module.scss';
import IssuesPage from './components/pages/Issues';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className={styles.app}>
        <IssuesPage />
      </div>
    );
  }
}

export default App;
