// @flow

import React, { Component } from 'react';
import styles from './SelectBox.module.scss';
import Select from 'react-select';
import { customStyles } from './EmotionStyles';

type State = {
  inputValue: string
};

type Props = {
  filterTitle: string,
  selectOptions: Array<Object>,
  searchPlaceholder: string,
  onSelectChange: (x: string) => void,
  selectionValue: any,
  noOptionsLabel: string
};

class SelectBox extends Component<Props, State> {
  state = { inputValue: '' };

  onInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  render() {
    const {
      filterTitle,
      selectOptions,
      searchPlaceholder,
      onSelectChange,
      selectionValue,
      noOptionsLabel
    } = this.props;
    const { inputValue } = this.state;

    const noOptionsMessage = () => `${noOptionsLabel}: ${inputValue}`;

    return (
      <div className={styles.selectBox}>
        <div className={styles.filterTitle}>{filterTitle}</div>
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={onSelectChange}
          onInputChange={this.onInputChange}
          options={selectOptions}
          placeholder={searchPlaceholder}
          styles={customStyles}
          tabSelectsValue={false}
          value={selectionValue}
          noOptionsMessage={noOptionsMessage}
        />
      </div>
    );
  }
}

const DropdownIndicator = () => '';

export default SelectBox;
