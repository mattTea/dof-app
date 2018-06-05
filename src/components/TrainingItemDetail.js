//not yet used

import React from 'react';

const TrainingItemDetail = (props) => (
  <div>
    <div>
      <p>{props.count}. {props.topic}</p>
      <p>{props.rating}</p>
      <p>{props.desription}</p>
      <p>{props.stage} - {props.discipline}</p>
    </div>  
  </div>
);

export default TrainingItemDetail;