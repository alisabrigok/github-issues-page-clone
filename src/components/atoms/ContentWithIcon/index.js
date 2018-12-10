// @flow

import * as React from 'react';
import styles from './ContentWithIcon.module.scss';

type Props = {
  parentClass: string,
  imgClass?: string,
  linkClass?: string,
  icon: React.Node,
  alt: string,
  link?: string,
  children?: React.Node
};

const ContentWithIcon = ({
  parentClass,
  imgClass,
  linkClass,
  icon,
  alt,
  children,
  link
}: Props) => (
  <div className={parentClass}>
    <a
      href={link}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={imgClass || styles.noticeIcon} src={icon} alt={alt} />
    </a>
    {children}
  </div>
);

export default ContentWithIcon;
