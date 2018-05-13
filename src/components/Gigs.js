import React from 'react';
import GigList from './GigList';
import GigSearch from './GigSearch';
import ticketmaster from '../api/ticketmaster';
// import animationImgUrl from '../../public/images/blue-headphones.png';

export default class Gigs extends React.Component {
  state = {
    isLoading: false,
    gigType: 'music'
  };
  
  handleSearch = (gigs) => {
    var that = this;

    this.setState(() => ({ isLoading: true }));

    ticketmaster.getGigs().then(function (gigs) {
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
          <div className="container loading-gigs">
            <img src={require('../../public/images/blue-headphones.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em"}}></img>
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
        <h6 className="text-center page-blurb">For those who prefer their bands close and their drinks in a glass.</h6>
        <GigSearch onSearch={this.handleSearch} gigType={gigType}/>
        {renderGigList()}
      </div>
    );
  }
};

