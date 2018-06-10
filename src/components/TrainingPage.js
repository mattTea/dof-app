import React from 'react';
import TrainingItemList from './TrainingItemList';

export default class TrainingPage extends React.Component {
  state = {
    stageValue: 'select',
    disciplineValue: 'select'
  };

  handleStageChange = (event) => {
    const newStageValue = event.target.value
    this.setState(() => ({ stageValue: newStageValue }));
  }

  handleDisciplineChange = (event) => {
    const newDisciplineValue = event.target.value
    this.setState(() => ({ disciplineValue: newDisciplineValue }));
  }

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
        <TrainingItemList stageValue={this.state.stageValue} disciplineValue={this.state.disciplineValue}/>
      </div>
    )
  }
}