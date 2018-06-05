import React from 'react';

export default class DisciplineSelector extends React.Component {
  state = {
    value: 'all'
  };

  handleChange = (event) => {
    const newValue = event.target.value
    this.setState(() => ({ value: newValue }));
    // console.log('event.target.value: ' + event.target.value);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Stage filtered for: ' + this.state.value);
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter by discipline:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="all" value>All</option>
              <option value="analysis">Analysis</option>
              <option value="test">Test</option>
              <option value="development">Development</option>
              <option value="delivery-leadership">Delivery Leadership</option>
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          {console.log('Discipline value state: ' + this.state.value)}
        </form>
      </div>
    )
  }
}



// const DisciplineSelector = () => (
//   <div>
//     <select name="discipline">
//       <option value="all" value>All</option>
//       <option value="analysis">Analysis</option>
//       <option value="test">Test</option>
//       <option value="development">Development</option>
//       <option value="delivery-leadership">Delivery Leadership</option>
//     </select>
//   </div>
// )

// export default DisciplineSelector;