import React from 'react';
import AddModal from './AddModal';
import TrainingResourceList from './TrainingResourceList';
import TrainingResourceListFilters from './TrainingResourceListFilters';

export default class TrainingPage extends React.Component {
  state = {
    addModalIsOpen: false
  };

  handleAddItem = () => {
    this.setState({ addModalIsOpen: true });
  };

  handleCloseAddModal = () => {
    this.setState(() => ({ addModalIsOpen: false }));
  };

  handleSubmit = (event) => {
    alert('New course added');
    event.preventDefault();
    this.handleCloseAddModal();
  };

  render() {
    return (
      <div className="container top-padding">
        <h3>Learning resources</h3>
        <AddModal
          handleCloseAddModal={this.handleCloseAddModal}
          addModalIsOpen={this.state.addModalIsOpen}
          handleSubmit={this.handleSubmit}
        />
        <TrainingResourceListFilters />
        <button className="add-button" onClick={this.handleAddItem}>Add new</button>
        <TrainingResourceList />
      </div>
    )
  }
}