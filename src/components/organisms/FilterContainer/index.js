// @flow

import React from 'react';
import styles from './FilterContainer.module.scss';
import AuthorSelect from '../AuthorSelect';
import LabelSelect from '../LabelSelect/index';

const FilterContainer = () => (
  <div className={styles.container}>
    <AuthorSelect />
    <LabelSelect />
  </div>
);

export default FilterContainer;
