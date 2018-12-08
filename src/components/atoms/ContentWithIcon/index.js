// @flow

import * as React from 'react';
import styles from './ContentWithIcon.module.scss';

type Props = {
  parentClass: string;
  childClass?: string;
  icon: React.Node;
  alt: string;
  children?: React.Node;
};

const ContentWithIcon = ({parentClass, childClass, icon, alt, children }: Props) => (
  <div className={parentClass}>
    <img className={childClass || styles.noticeIcon} src={icon} alt={alt}/> 
    {children}
  </div>
);

export default ContentWithIcon;