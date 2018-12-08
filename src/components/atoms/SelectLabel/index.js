// @flow

import * as React from 'react';
import styles from './SelectLabel.module.scss';

type Props = {
  toggleOpen: () => void,
  children: React.Node
};

const SelectLabel = ({ toggleOpen, children }: Props) => (
  <div className={styles.label} onClick={toggleOpen}>
    {children}
  </div>
);

export default SelectLabel;
