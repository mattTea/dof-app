import React from 'react';

const TrainingItem = (props) => (
  <div className="training-item">
    <div className="topic">{props.topic}</div>
    <div className="rating">{Number(props.rating).toFixed(1)}</div>
    {console.log(typeof props.rating)}
    <div className="rating">
      <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
    </div>
    <div className="sub-heading">{props.stage}: {props.discipline}</div>
    <div className="description">{props.description}{<br/>}{<br/>}{props.learningObjective}</div>
    {props.duration && 
      <div className="duration">Duration: {props.duration}</div>
    }
    
  </div>
);

export default TrainingItem;