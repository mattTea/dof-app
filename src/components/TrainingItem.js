import React from 'react';

const TrainingItem = (props) => (
  <div>
    <div>
      <p>{props.count}. {props.topic} {props.rating}</p>
      <p>{props.stage} - {props.discipline}</p>
      <p>{props.description}</p>
    </div>  
  </div>
);

export default TrainingItem;