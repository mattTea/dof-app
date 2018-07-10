import React from 'react';
import Modal from 'react-modal';

export default class RatingModal extends React.Component {

  state = {
    ratingToPost: 'select'
  }

  componentWillMount() {
    Modal.setAppElement('body');
  };

  handleRatingChange = (event) => {
    const newRatingValue = event.target.value;
    this.setState(() => ({ ratingToPost: newRatingValue }));
  }

  handleRatingSubmit = async () => {
    let requestData = {
      rating: this.state.ratingToPost
    }

    let data = JSON.stringify(requestData)

   await fetch(`http://localhost:3030/api/training/${this.props.trainingItemId}/ratings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    }).then(response => {
      return response.json().then(data => ({ data: data, status: response.status }));
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ postSuccess: true, postResponse: res.data });
        }
        if (res.status === 500) {
          this.setState({ postSuccess: false, postResponse: res });
        }
      })
      .catch(err => {
        console.log('err', err);
        return this.setState({ postSuccess: false, postResponse: err })
      })

    await console.log(this.state)
  }

  render () {

    const submitRatingButton = this.state.ratingToPost !== 'select'
      ? <button className="button" onClick={this.handleRatingSubmit}>Submit Rating</button>
      : null

    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.handleCloseModal}
        contentLabel="Rate this course"
        closeTimeoutMS={200}
        className="modal"
        trainingItemId={this.props.id}
      >
        <div className="modal__title">Rate this course</div>
        <div className="course-to-rate">(coming soon)</div>
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{ maxWidth: "1.5em", maxHeight: "1.5em" }}></img>
          <img src={require('../../public/images/star.png')} style={{ maxWidth: "1.5em", maxHeight: "1.5em" }}></img>
          <img src={require('../../public/images/star.png')} style={{ maxWidth: "1.5em", maxHeight: "1.5em" }}></img>
          <img src={require('../../public/images/star.png')} style={{ maxWidth: "1.5em", maxHeight: "1.5em" }}></img>
          <img src={require('../../public/images/star.png')} style={{ maxWidth: "1.5em", maxHeight: "1.5em" }}></img>
        </div>
        <div className="course-to-rate">
          <label>
            {/* Filter by stage: */}
            <select value={this.state.ratingToPost} onChange={this.handleRatingChange}>
              <option value="select">- select -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        {submitRatingButton}
        <h3 className="course-to-rate">{this.props.courseToRate}</h3>
        <button className="button" onClick={this.props.handleCloseModal}>Close</button>
      </Modal>
    )
  }
}

