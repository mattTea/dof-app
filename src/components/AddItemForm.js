import React from 'react';

export default class AddItemForm extends React.Component {

  handleSubmit(event) {
    alert('New course added');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-label">
            Topic: 
            <input className="form-field" type="text" /><br/>
          </label>
          <label className="form-label">
            Description: 
            <input className="form-field" type="text" /><br/>
          </label>
          <input className="add-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
