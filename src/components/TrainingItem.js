import React from 'react';

const TrainingItem = (props) => (
  <div className="training-item">
    <p>{props.count}. {props.topic} {props.rating}</p>
    <p>{props.stage} - {props.discipline}</p>
    <p>{props.description}</p> 
  </div>
);

export default TrainingItem;