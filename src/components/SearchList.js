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