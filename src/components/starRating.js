// of course... props isn't defined in here!

export function starRating() {
  if (props.rating === 0) {
    return (
      <div className="rating">
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 0 && props.rating <= 0.5) {
    return (
      <div className="rating">
        <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 0.5 && props.rating <= 1) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 1 && props.rating <= 1.5) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 1.5 && props.rating <= 2) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 2 && props.rating <= 2.5) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 2.5 && props.rating <= 3) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 3 && props.rating <= 3.5) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 3.5 && props.rating <= 4) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/empty-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 4 && props.rating <= 4.5) {
    return (
      <div className="rating">
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        <img src={require('../../public/images/half-star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
      </div>
    );
  } else if (props.rating > 4.5 && props.rating <= 5) {
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