//not yet used
//look at how to link to separate page from blog-app

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
