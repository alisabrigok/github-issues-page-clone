// @flow

import React from 'react';
import styles from './Blanket.module.scss';

type Props = {
  toggleOpen: () => void;
};

const Blanket = ({toggleOpen}: Props) => <div className={styles.blanket} onClick={toggleOpen} />;

export default Blanket;