// @flow

import React, { Component } from 'react';
import styles from './FilterResetSection.module.scss';
import ContentWithIcon from '../../atoms/ContentWithIcon/index';
import crossIcon from '../../../assets/icons/cross.svg';
import { connect } from 'react-redux';
import { filterByAuthor } from '../../organisms/AuthorSelect/actions';
import { filterByLabel } from '../../organisms/LabelSelect/actions';

type Props = {
  filterByAuthor: () => void,
  filterByLabel: () => void
};

class FilterResetSection extends Component<Props> {
  resetFilterHandler = () => {
    this.props.filterByAuthor();
    this.props.filterByLabel();
  }

  render() {
    return (
      <ContentWithIcon parentClass={styles.container} icon={crossIcon} alt="cross icon">
        <p onClick={this.resetFilterHandler}>Clear current search query, filters and sorts</p>
      </ContentWithIcon>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  filterByAuthor: () => dispatch(filterByAuthor()),
  filterByLabel: () => dispatch(filterByLabel())
});

export default connect(null, mapDispatchToProps)(FilterResetSection);
