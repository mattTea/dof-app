import React from 'react';
import Modal from 'react-modal';

const RatingModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="Rate this course"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Rate this course</h3>
    <div>...course topic title...</div>
    <div>Coming soon</div>
    <button className="button" onClick={props.handleCloseModal}>Ok</button>
  </Modal>
);

export default RatingModal;