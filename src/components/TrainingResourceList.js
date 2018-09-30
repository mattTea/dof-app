import React from 'react';
import { connect } from 'react-redux';

const TrainingResourceList = (props) => (
  <div>
    <p>redux store data... rendered from TrainingResourceList component</p>
    {props.filters.text}
    {props.trainingResources.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    trainingResources: state.trainingResources,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TrainingResourceList);
