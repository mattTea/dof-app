import React from 'react';

export default class StageSelector extends React.Component {
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
            Filter by training stage:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="all" value>All</option>
              <option value="delivery-fundamentals">Delivery Fundamentals</option>
              <option value="individual-choice">Individual Choice</option>
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          {console.log('Stage value state: ' + this.state.value)}
        </form>
      </div>
    )
  }
}




//   const StageSelector = () => (
  // <div>
  //   <select value={this.state.value} onChange={this.handleChange}>
  //     <option value="all" value>All</option>
  //     <option value="delivery-fundamentals">Delivery Fundamentals</option>
  //     <option value="individual-choice">Individual Choice</option>
  //   </select>
  // </div>
// )

// export default StageSelector;

//-----------------------

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite La Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }