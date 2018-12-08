// @flow

import React, { Component } from 'react';
import styles from './Main.module.scss';
import Row from '../../molecules/Row';

type Props = {};

class Main extends Component<Props> {
  render() {
    return (
      <main className={styles.main}>
        <Row issueNumber='#5984' date="2 hours" from="jeremypeters" issueTitle="All breakpoints are unverified when trying to debug tests" commentNumber="13"/>
        <Row issueNumber='#5984' date="2 hours" from="jeremypeters" issueTitle="All breakpoints are unverified when trying to debug tests" commentNumber="13"/>
        <Row issueNumber='#5984' date="2 hours" from="jeremypeters" issueTitle="All breakpoints are unverified when trying to debug tests" commentNumber="13"/>
        <Row issueNumber='#5984' date="2 hours" from="jeremypeters" issueTitle="All breakpoints are unverified when trying to debug tests" commentNumber="13"/>
      </main>
    );
  }
}

export default Main;