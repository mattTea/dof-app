import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setLevelFilter, setDisciplineFilter } from '../actions/filters';

const submitHandler = (e) => {
  e.preventDefault();
}

const TrainingResourceListFilters = (props) => (
  <div>
    <div className="filter">
      <label>
        <select
          value={props.filters.level}
          onChange={(e) => {
            props.dispatch(setLevelFilter(e.target.value));
          }}
        >
          <option value="">- level -</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
        </select>
      </label>
    </div>
    <div className="filter">
      <label>
        <select
          value={props.filters.discipline}
          onChange={(e) => {
            props.dispatch(setDisciplineFilter(e.target.value));
          }}
        >
          <option value="">- discipline -</option>
          <option value="Analysis">Analysis</option>
          <option value="Test">Test</option>
          <option value="Development">Development</option>
          <option value="Delivery Leadership">Delivery Leadership</option>
          <option value="Core Skills">Core Skills</option>
        </select>
      </label>
    </div>
    <form className="filter" onSubmit={submitHandler}>
      <input
        className="search-field"
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
        placeholder="Search..."
      />
    </form>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TrainingResourceListFilters);