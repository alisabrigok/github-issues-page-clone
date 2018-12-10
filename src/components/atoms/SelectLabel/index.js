// @flow

import * as React from 'react';
import styles from './SelectLabel.module.scss';

type Props = {
  toggleSelectBox: () => void,
  children: React.Node
};

const SelectLabel = ({ toggleSelectBox, children }: Props) => (
  <div className={styles.label} onClick={toggleSelectBox}>
    {children}
  </div>
);

export default SelectLabel;
