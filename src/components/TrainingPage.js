import React from 'react';
// import SearchList from './SearchList';
import TrainingItemList from './TrainingItemList';
import AddModal from './AddModal';

export default class TrainingPage extends React.Component {
  state = {
    stageValue: 'select',
    disciplineValue: 'select',
    addModalIsOpen: false,
    searchTerm: ''
  };

  handleAddItem = () => {
    this.setState({ addModalIsOpen: true });
  };

  handleCloseAddModal = () => {
    this.setState(() => ({ addModalIsOpen: false }));
  };

  handleStageChange = (event) => {
    const newStageValue = event.target.value
    this.setState(() => ({ stageValue: newStageValue }));
  };

  handleDisciplineChange = (event) => {
    const newDisciplineValue = event.target.value
    this.setState(() => ({ disciplineValue: newDisciplineValue }));
  };

  handleSubmit = (event) => {
    alert('New course added');
    event.preventDefault();
    this.handleCloseAddModal();
  };

  handleSearchChange = (event) => {
    let newSearchTerm = event.target.value;
    this.setState(() => ({ searchTerm: newSearchTerm }));
  };

  render() {
    return (
      <div className="container top-padding">
        <h3>Training resources</h3>
        <div className="filter">
          <label>
            {/* Filter by stage: */}
            <select value={this.state.stageValue} onChange={this.handleStageChange}>
              <option value="select">- stage -</option>
              <option value="All">All</option>
              <option value="Delivery Fundamentals">Delivery Fundamentals</option>
              <option value="Individual Choice">Individual Choice</option>
            </select>
          </label>
        </div>
        <div className="filter">
          <label>
            {/* Filter by discipline: */}
            <select value={this.state.disciplineValue} onChange={this.handleDisciplineChange}>
              <option value="select">- discipline -</option>
              <option value="All">All</option>
              <option value="Analysis">Analysis</option>
              <option value="Test">Test</option>
              <option value="Development">Development</option>
              <option value="Delivery Leadership">Delivery Leadership</option>
              <option value="Core Skills">Core Skills</option>
            </select>
          </label>
        </div>
        <form className="filter">
          <input
            className="search-field"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            placeholder="Search..." />
        </form>
        <button className="add-button" onClick={this.handleAddItem}>Add new</button>
        <TrainingItemList
          stageValue={this.state.stageValue}
          disciplineValue={this.state.disciplineValue}
          searchTerm={this.state.searchTerm}
        />
        {/* <SearchList searchTerm={this.state.searchTerm} /> */}
        <AddModal
          handleCloseAddModal={this.handleCloseAddModal}
          addModalIsOpen={this.state.addModalIsOpen}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}