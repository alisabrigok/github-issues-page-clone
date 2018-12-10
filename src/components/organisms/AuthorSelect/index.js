// @flow

import React, { Component } from 'react';
import styles from './AuthorSelect.module.scss';
import SelectBox from '../../molecules/SelectBox';
import Blanket from '../../atoms/Blanket';
import SelectLabel from '../../atoms/SelectLabel';
import { connect } from 'react-redux';
import { filterByAuthor } from './actions';
import { isEmpty } from 'lodash';

type State = {
  isSelectBoxOpen: boolean
};

type Props = {
  authors: Array<Object>,
  filterByAuthor: (x: Object) => void,
  selectedAuthor: ?Object
};

class AuthorSelect extends Component<Props, State> {
  state = { isSelectBoxOpen: false };

  toggleSelectBox = () => {
    this.setState(state => ({ isSelectBoxOpen: !state.isSelectBoxOpen }));
  };

  onSelectChange = (selectedAuthor: Object) => {
    this.toggleSelectBox();
    this.props.filterByAuthor(selectedAuthor);
  };

  render() {
    const { isSelectBoxOpen } = this.state;
    const { authors, selectedAuthor } = this.props;

    return (
      <div className={styles.menuContainer}>
        {isSelectBoxOpen && <Blanket toggleSelectBox={this.toggleSelectBox} />}
        <SelectLabel toggleSelectBox={this.toggleSelectBox}>Author</SelectLabel>
        {isSelectBoxOpen && !isEmpty(authors) && (
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

const mapStateToProps = ({ authorsReducer, issuesReducer }) => ({
  authors: authorsReducer.authors,
  selectedAuthor: issuesReducer.selectedAuthor
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorSelect);
