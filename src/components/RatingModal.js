import React from 'react';
import Modal from 'react-modal';

export default class RatingModal extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.handleCloseModal}
        contentLabel="Rate this course"
        closeTimeoutMS={200}
        className="modal"
      >
        <div className="modal__title">Rate this course</div>
        <div className="course-to-rate">(coming soon)</div>
        <div className="rating">
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
          <img src={require('../../public/images/star.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
        </div>
        <h3 className="course-to-rate">{this.props.courseToRate}</h3>
        <button className="button" onClick={this.props.handleCloseModal}>Close</button>
      </Modal>
    )
  }
}
