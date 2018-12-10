// @flow

import React, { Component } from 'react';
import styles from './Header.module.scss';
import StatusTabContainer from '../../molecules/StatusTabContainer';
import FilterContainer from '../../organisms/FilterContainer';

type Props = {};

class Header extends Component<Props> {
  render() {
    return (
      <header className={styles.header}>
        <StatusTabContainer />
        <FilterContainer />
      </header>
    );
  }
}

export default Header;
