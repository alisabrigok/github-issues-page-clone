// @flow

import React, { Component } from 'react';
import styles from './AuthorSelect.module.scss';
import SelectBox from '../../molecules/SelectBox';
import Blanket from '../../atoms/Blanket';
import SelectLabel from '../../atoms/SelectLabel';
import { connect } from 'react-redux';
import { filterByAuthor } from './actions';

type State = {
  isSelectBoxOpen: boolean,
  selectedAuthor: ?Object
};

type Props = {
  authors: Array<Object>,
  filterByAuthor: (x: Object) => void
};

class AuthorSelect extends Component<Props, State> {
  state = { isSelectBoxOpen: false, selectedAuthor: null };

  toggleSelectBox = () => {
    this.setState(state => ({ isSelectBoxOpen: !state.isSelectBoxOpen }));
  };

  onSelectChange = (selectedAuthor: Object) => {
    this.setState({ selectedAuthor }, () => {
      this.toggleSelectBox();
      this.props.filterByAuthor(selectedAuthor);
    });
  };

  render() {
    const { isSelectBoxOpen, selectedAuthor } = this.state;
    const { authors } = this.props;

    return (
      <div className={styles.menuContainer}>
        {isSelectBoxOpen && <Blanket toggleSelectBox={this.toggleSelectBox} />}
        <SelectLabel toggleSelectBox={this.toggleSelectBox}>
          {' '}
          Author{' '}
        </SelectLabel>
        {isSelectBoxOpen && (
          <SelectBox
            selectOptions={authors}
            filterTitle="Filter by author"
            searchPlaceholder="Filter users"
            onSelectChange={this.onSelectChange}
            noOptionsLabel="author"
            selectedOption={selectedAuthor}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByAuthor: selectedAuthor => dispatch(filterByAuthor(selectedAuthor))
  };
};

const mapStateToProps = ({ authorsReducer }) => ({
  authors: authorsReducer.authors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorSelect);
