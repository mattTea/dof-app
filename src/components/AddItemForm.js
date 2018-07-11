import React from 'react';

export default class AddItemForm extends React.Component {

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.handleSubmit}>
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
