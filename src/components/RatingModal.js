import React from 'react';
import Modal from 'react-modal';

export default class RatingModal extends React.Component {

  state = {
    ratingToPost: 'select',
    postFailure: null,
    postSuccess: null,
    postResponse: null
  }

  componentWillMount() {
    Modal.setAppElement('body');
  };

  closeModal = (event) => {
    this.setState({
      postFailure: null,
      postSuccess: null,
      postResponse: null
      }
    )
    this.props.handleCloseModal()

  }

  handleRatingChange = (event) => {
    const newRatingValue = event.target.value;
    this.setState(() => ({ ratingToPost: newRatingValue,
      postFailure: null,
      postSuccess: null,
      postResponse: null }));
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
        console.log(res)
        if (res.status === 200) {
          this.setState({ ratingToPost: 'select', postSuccess: true, postResponse: res.data });
        }
        if (res.status === 500) {
          this.setState({ postSuccess: false, postFailure: true, postResponse: res });
        }
      })
      .catch(err => {
        console.log('err', err);
        return this.setState({ postSuccess: false, postFailure: true, postResponse: err })
      })
  }

  render () {

    const submitRatingButton = this.state.ratingToPost !== 'select'
      ? <button className="button" onClick={this.handleRatingSubmit}>Submit Rating</button>
      : null

    const ratingsSuccessfulSubmit = this.state.postSuccess === true
      ? <label>Thanks for submitting your rating of the course!</label>
      : null

    const ratingsError = this.state.postFailure === true
      ? <label>There was an error when submitting your rating. Error: {this.state.postResponse}</label>
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
        {ratingsSuccessfulSubmit}
        {ratingsError}
        <h3 className="course-to-rate">{this.props.courseToRate}</h3>
        <button className="button" onClick={this.closeModal}>Close</button>
      </Modal>
    )
  }
}

