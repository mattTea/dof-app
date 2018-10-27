import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setStageFilter, setDisciplineFilter } from '../actions/filters';

const TrainingResourceListFilters = (props) => (
  <div>
    <div className="filter">
      <label>
        <select
          value={props.filters.stage}
          onChange={(e) => {
            props.dispatch(setStageFilter(e.target.value));
          }}
        >
          <option value="">- stage -</option>
          <option value="Delivery Fundamentals">Delivery Fundamentals</option>
          <option value="Individual Choice">Individual Choice</option>
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
    <form className="filter">
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