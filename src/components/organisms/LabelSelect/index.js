// @flow

import React, { Component } from 'react';
import styles from './LabelSelect.module.scss';
import SelectBox from '../../molecules/SelectBox';
import Blanket from '../../atoms/Blanket';
import SelectLabel from '../../atoms/SelectLabel';
import { connect } from 'react-redux';
import { filterByLabel } from './actions';
import { isEmpty } from 'lodash';

type State = {
  isSelectBoxOpen: boolean
};

type Props = {
  labels: Array<Object>,
  filterByLabel: (x: Object) => void,
  selectedLabel: ?Object
};

class LabelSelect extends Component<Props, State> {
  state = { isSelectBoxOpen: false };

  toggleSelectBox = () => {
    this.setState(state => ({ isSelectBoxOpen: !state.isSelectBoxOpen }));
  };

  onSelectChange = (selectedLabel: Object) => {
    this.toggleSelectBox();
    this.props.filterByLabel(selectedLabel);
  };

  render() {
    const { isSelectBoxOpen } = this.state;
    const { labels, selectedLabel } = this.props;

    return (
      <div className={styles.menuContainer}>
        {isSelectBoxOpen && <Blanket toggleSelectBox={this.toggleSelectBox} />}
        <SelectLabel toggleSelectBox={this.toggleSelectBox}>Labels</SelectLabel>
        {isSelectBoxOpen && !isEmpty(labels) && (
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

const mapStateToProps = ({ labelsReducer, issuesReducer }) => ({
  labels: labelsReducer.labels,
  selectedLabel: issuesReducer.selectedLabel
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelSelect);
