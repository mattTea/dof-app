// not used - function contained in TrainingItemList

import React from 'react';

export default class SearchList extends React.Component {

  render() {
    return (
      <div>
        {this.props.searchTerm ? console.log('SearchList component: ' + this.props.searchTerm) : console.log('SearchTerm is undefined')}
      </div>
    )
  }
}


/*
Think we need to somehow pass the filteredTrainingResources from TrainingItemList.js in here
to then be able to filter based on search
Or pass in all training resources again?

Iterative steps...
1. only allow search when no filters are selected (grey out search when active)
2. then allow filters and search to work with each other (may need redux state mgt for this)

*/