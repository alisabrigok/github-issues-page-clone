// @flow

import React, { Component } from 'react';
import styles from './FilterContainer.module.scss';
import AuthorSelect from '../AuthorSelect';
import LabelSelect from '../LabelSelect/index';

type Props = {};

class FilterContainer extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <AuthorSelect />
        <LabelSelect />
      </div>
    );
  }
}

export default FilterContainer;
