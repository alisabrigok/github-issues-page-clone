// @flow

import React, { Component } from 'react';
import styles from './LabelSelect.module.scss';
import SelectBox from '../../molecules/SelectBox';
import Blanket from '../../atoms/Blanket';
import SelectLabel from '../../atoms/SelectLabel';
import { connect } from 'react-redux';
import { filterByLabel } from './actions';

type State = {
  isSelectBoxOpen: boolean,
  selectedLabel: ?Object
};

type Props = {
  labels: Array<Object>,
  filterByLabel: (x: Object) => void
};

class LabelSelect extends Component<Props, State> {
  state = { isSelectBoxOpen: false, selectedLabel: null };

  toggleSelectBox = () => {
    this.setState(state => ({ isSelectBoxOpen: !state.isSelectBoxOpen }));
  };

  onSelectChange = (selectedLabel: Object) => {
    this.setState({ selectedLabel }, () => {
      this.toggleSelectBox();
      this.props.filterByLabel(selectedLabel);
    });
  };

  render() {
    const { isSelectBoxOpen, selectedLabel } = this.state;
    const { labels } = this.props;

    return (
      <div className={styles.menuContainer}>
        {isSelectBoxOpen && <Blanket toggleSelectBox={this.toggleSelectBox} />}
        <SelectLabel toggleSelectBox={this.toggleSelectBox}>
          {' '}
          Labels{' '}
        </SelectLabel>
        {isSelectBoxOpen && (
          <SelectBox
            selectOptions={labels}
            filterTitle="Filter by label"
            searchPlaceholder="Filter labels"
            onSelectChange={this.onSelectChange}
            noOptionsLabel="label"
            selectedOption={selectedLabel}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByLabel: selectedLabel => dispatch(filterByLabel(selectedLabel))
  };
};

const mapStateToProps = ({ labelsReducer }) => ({
  labels: labelsReducer.labels
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelSelect);
