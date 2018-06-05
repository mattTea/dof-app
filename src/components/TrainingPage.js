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
    // console.log('event.target.value: ' + event.target.value);
  }

  handleDisciplineChange = (event) => {
    const newDisciplineValue = event.target.value
    this.setState(() => ({ disciplineValue: newDisciplineValue }));
    // console.log('event.target.value: ' + event.target.value);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Stage filtered for: ' + this.state.value);
  // }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter by training stage:
            <select value={this.state.stageValue} onChange={this.handleStageChange}>
              <option value="select">-select-</option>
              <option value="all">All</option>
              <option value="delivery-fundamentals">Delivery Fundamentals</option>
              <option value="individual-choice">Individual Choice</option>
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          {console.log('Stage value state: ' + this.state.stageValue)}
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter by discipline:
            <select value={this.state.disciplineValue} onChange={this.handleDisciplineChange}>
              <option value="select">-select-</option>
              <option value="all">All</option>
              <option value="analysis">Analysis</option>
              <option value="test">Test</option>
              <option value="development">Development</option>
              <option value="delivery-leadership">Delivery Leadership</option>
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          {console.log('Discipline value state: ' + this.state.disciplineValue)}
        </form>
        <TrainingItemList stageValue={this.state.stageValue} disciplineValue={this.state.disciplineValue}/>
      </div>
    )
  }
}