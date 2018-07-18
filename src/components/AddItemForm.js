import React from 'react';

export default class AddItemForm extends React.Component {

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <label className="form-label">Title: </label> 
          <input className="form-field" type="text" /><br/>
          <label className="form-label">Description: </label>
          <input className="form-field" type="text" /><br/>
          <label className="form-label">Stage: </label>
          <input className="form-field" type="text" /><br/>
          <label className="form-label">Discipline: </label>
          <input className="form-field" type="text" /><br/>
          <label className="form-label">Duration: </label>
          <input className="form-field" type="text" /><br/>
          <label className="form-label">Title: </label>
          <input className="form-field" type="text" /><br/>
          <label className="form-label">URL link: </label>
          <input className="form-field" type="text" /><br/>
          <input className="add-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}