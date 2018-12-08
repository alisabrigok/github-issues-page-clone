// @flow

import React, { Component } from 'react';
import styles from './StatusTabContainer.module.scss';
import exclamationBlack from '../../../assets/icons/exclamation-black.svg';
import tick from '../../../assets/icons/tick.svg';
import ContentWithIcon from '../../atoms/ContentWithIcon';

type Props = {};

class StatusTabContainer extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <ContentWithIcon
          parentClass={styles.open}
          icon={exclamationBlack}
          alt="exclamation icon black"
        >
          296 Open
        </ContentWithIcon>
        <ContentWithIcon parentClass={styles.close} icon={tick} alt="tick icon">
          3,459 Closed
        </ContentWithIcon>
      </div>
    );
  }
}

export default StatusTabContainer;
