import React from 'react';
import { components } from 'react-select';
import styles from './SelectOption.module.scss';

const { Option } = components;

const SelectOption = props => {
  const { data } = props;

  const indicator = data.avatarUrl ? 
    (<img className={styles.author} src={data.avatarUrl} alt="author"/>) :
    (<span className={styles.author} style={{backgroundColor: `#${data.color}`}} ></span>);

  return (
    <Option {...props}>
      <div className={styles.option}>
        {indicator}
        {data.label}
      </div>
    </Option>
  )
};

export default SelectOption;