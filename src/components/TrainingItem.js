import React from 'react';

export default class TrainingItem extends React.Component {

  starRating = () => {
    const ratingNumber = Number(this.props.rating);
    
    if (ratingNumber === 0) {
      return (
        <div className="rating">
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 0 && ratingNumber <= 0.5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 0.5 && ratingNumber <= 1) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 1 && ratingNumber <= 1.5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 1.5 && ratingNumber <= 2) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 2 && ratingNumber <= 2.5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 2.5 && ratingNumber <= 3) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 3 && ratingNumber <= 3.5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 3.5 && ratingNumber <= 4) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 4 && ratingNumber <= 4.5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else if (ratingNumber > 4.5 && ratingNumber <= 5) {
      return (
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
      );
    } else {
      console.log('Reaching blank else statement in starRating.js');
    }
  }

  render() {
    return (
      <div className="training-item">
        <div className="view-link">
          <div className="topic">{this.props.topic}</div>
          {this.props.url &&
            <a href={this.props.url} target="_blank"><img src={require('../../public/images/new-window.png')}></img></a>
          }
        </div>
        <button className="rate-button" onClick={this.props.handleRate}>
          <div className="rating">{this.starRating()}</div>
        </button>
        <div className="sub-heading">{this.props.stage}: {this.props.discipline}</div>
        <div className="description">{this.props.description}{<br/>}{<br/>}{this.props.learningObjective}</div>
        <div className="duration">{this.props.deliveryMethod}</div>
        {this.props.duration && 
          <div className="duration">Duration: {this.props.duration}</div>
        }
      </div>
    )
  }
}