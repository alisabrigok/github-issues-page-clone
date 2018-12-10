// @flow

import React from 'react';
import styles from './Header.module.scss';
import StatusTabContainer from '../../molecules/StatusTabContainer';
import FilterContainer from '../../organisms/FilterContainer';

const Header = () => (
  <header className={styles.header}>
    <StatusTabContainer />
    <FilterContainer />
  </header>
);

export default Header;
