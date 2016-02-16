import React from 'react';
import SearchBox from '../components/SearchBox';
import Beers from '../components/Beers';
import request from 'superagent';

export default React.createClass({
  getInitialState() {
    return {
      beers: [],
    };
  },

  render() {
    const { beers } = this.state;
    return (
      <div>
        <h1 className="text-center">Beer Search App</h1>
        <SearchBox handleSubmit={this.handleSubmit} />
        <Beers beers={beers} />
      </div>
    );
  },

  handleSubmit(searchVal) {
    request
      .get('/api/search')
      .query({ searchVal })
      .end((err, res) => {
        const beers = res.body.entities;
        this.setState({ beers });
      });
  },

});
