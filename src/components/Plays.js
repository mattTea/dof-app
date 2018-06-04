import React from 'react';
import GigList from './GigList';
import GigSearch from './GigSearch';
import ticketmasterPlays from '../api/ticketmasterPlays';

export default class Plays extends React.Component {
  state = {
    isLoading: false,
    gigType: 'theatre'
  };

  handleSearch = (gigs) => {
    var that = this;

    this.setState(() => ({ isLoading: true }));

    ticketmasterPlays.getGigs().then(function (gigs) {
      that.setState(() => ({
        gigs: gigs,
        isLoading: false
      }));
    }), function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    };
  };

  render() {
    var {isLoading, gigType, gigs} = this.state;
    console.log('Gigs.jsx, this.state.gigs: ' + this.state.gigs);

    function renderGigList () {
      if (isLoading) {
        return (
          <div className="container loading-plays">
            <img src={require('../../public/images/blue-glasses.png')} style={{maxWidth: "2em", maxHeight: "2em"}}></img>
          </div>
        )
      } else if (gigs) {
        return (
          <div>
            <GigList gigs={gigs} gigType={gigType}/>
          </div>
        )
      }
    }

    return (
      <div className="container">
        <h1 className="text-center page-title">Feeling intimate?</h1>
        <h6 className="text-center page-blurb">For those who prefer their players close and their theatre fringe.</h6>
        <GigSearch onSearch={this.handleSearch} gigType={gigType}/>
        {renderGigList()}
      </div>
    );
  }
};

