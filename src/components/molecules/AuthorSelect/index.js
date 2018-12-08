// @flow

import React, { Component } from 'react';
import styles from './AuthorSelect.module.scss';
import SelectBox from '../../atoms/SelectBox';
import Blanket from '../../atoms/Blanket';
import SelectLabel from '../../atoms/SelectLabel';

type State = {
  isOpen: boolean,
  value: string
};

type Props = {};

class AuthorSelect extends Component<Props, State> {
  state = { isOpen: false, value: '' };

  toggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  onSelectChange = (value: string) => {
    this.setState({ value });
    this.toggleOpen();
  };

  render() {
    const { isOpen, value } = this.state;

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
      <div className={styles.menuContainer}>
        {isOpen && <Blanket toggleOpen={this.toggleOpen} />}
        <SelectLabel toggleOpen={this.toggleOpen}> Author </SelectLabel>
        {isOpen && (
          <SelectBox
            selectOptions={options}
            filterTitle="Filter by author"
            searchPlaceholder="Filter users"
            onSelectChange={this.onSelectChange}
            noOptionsLabel="author"
            selectionValue={value}
          />
        )}
      </div>
    );
  }
}

export default AuthorSelect;
