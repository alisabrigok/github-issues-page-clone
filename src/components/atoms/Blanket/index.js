// @flow

import React from 'react';
import styles from './Blanket.module.scss';

type Props = {
  toggleSelectBox: () => void
};

const Blanket = ({ toggleSelectBox }: Props) => (
  <div className={styles.blanket} onClick={toggleSelectBox} />
);

export default Blanket;
