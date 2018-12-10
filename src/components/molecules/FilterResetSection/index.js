// @flow

import React, { Component } from 'react';
import styles from './FilterResetSection.module.scss';
import ContentWithIcon from '../../atoms/ContentWithIcon/index';
import crossIcon from '../../../assets/icons/cross.svg';
import { connect } from 'react-redux';
import { resetFilters } from './actions';

type Props = {
  resetFilters: () => void
};

class FilterResetSection extends Component<Props> {
  resetFilterHandler = () => {
    this.props.resetFilters();
  };

  render() {
    return (
      <ContentWithIcon
        parentClass={styles.container}
        icon={crossIcon}
        alt="cross icon"
      >
        <p onClick={this.resetFilterHandler}>
          Clear current search query, filters and sorts
        </p>
      </ContentWithIcon>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters())
});

export default connect(
  null,
  mapDispatchToProps
)(FilterResetSection);
