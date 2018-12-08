// @flow

import React, { Component } from 'react';
import styles from './FilterContainer.module.scss';
import AuthorSelect from '../AuthorSelect';

type Props = {};

class FilterContainer extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <AuthorSelect/>
        {/* <div className={styles.item}>Labels</div>
        <div className={styles.item}>Projects</div>
        <div className={styles.item}>Milestones</div>
        <div className={styles.item}>Assignee</div>
        <div className={styles.item}>Sort</div> */}
      </div>
    );
  }
}

export default FilterContainer;