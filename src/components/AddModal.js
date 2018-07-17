import React from 'react';
import Modal from 'react-modal';
import AddItemForm from './AddItemForm';

export default class AddModal extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  };

  render() {
    return (
      <Modal
        isOpen={this.props.addModalIsOpen}
        onRequestClose={this.props.handleCloseAddModal}
        contentLabel="Add training item"
        closeTimeoutMS={200}
        className="modal"
      >
        <div className="modal__title">Add a new training resource</div>
        <div className="modal__body">(coming soon)</div>
        <AddItemForm handleSubmit={this.props.handleSubmit} />
        {/* <button className="button" onClick={this.props.handleCloseAddModal}>Close</button> */}
      </Modal>
    )
  }
}
