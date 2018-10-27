import React from 'react';
import { connect } from 'react-redux';
import TrainingResourceItem from './TrainingResourceItem';
import selectTrainingResources from '../selectors/trainingResources';

const TrainingResourceList = (props) => (
  <div>
    {props.trainingResources.map((trainingResource, index) => {
      return <TrainingResourceItem key={index} {...trainingResource}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    trainingResources: selectTrainingResources(state.trainingResources, state.filters)
  };
};

export default connect(mapStateToProps)(TrainingResourceList);
