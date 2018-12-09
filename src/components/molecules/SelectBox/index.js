// @flow

import React, { Component } from 'react';
import styles from './SelectBox.module.scss';
import Select from 'react-select';
import { customStyles } from './EmotionStyles';
import SelectOption from '../../atoms/SelectOption';

type State = {
  inputValue: string
};

type Props = {
  filterTitle: string,
  selectOptions: Array<Object>,
  searchPlaceholder: string,
  onSelectChange: (x: Object) => void,
  selectedOption: ?Object,
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
      selectedOption,
      noOptionsLabel
    } = this.props;
    const { inputValue } = this.state;

    const noOptionsMessage = () => `${noOptionsLabel}: ${inputValue} not found`;
    const DropdownIndicator = () => '';

    return (
      <div className={styles.selectBox}>
        <div className={styles.filterTitle}>{filterTitle}</div>
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{
            Option: SelectOption,
            DropdownIndicator,
            IndicatorSeparator: null
          }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable
          menuIsOpen
          onChange={onSelectChange}
          onInputChange={this.onInputChange}
          options={selectOptions}
          placeholder={searchPlaceholder}
          styles={customStyles}
          tabSelectsValue={false}
          value={selectedOption}
          noOptionsMessage={noOptionsMessage}
        />
      </div>
    );
  }
}

export default SelectBox;
