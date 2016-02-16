import React from 'react';
import SearchBox from '../components/SearchBox';
import Beers from '../components/Beers';
import request from 'superagent';

export default React.createClass({
  getInitialState() {
    return {
      beers: [],
      isSubmitting: false,
      hasError: false,
    };
  },

  handleSubmit(searchVal) {
    this.setState({ isSubmitting: true });
    request
      .get('/api/search')
      .query({ searchVal })
      .end((err, res) => {
        if (res.statusCode === 404) {
          this.setState({
            beers: [],
            isSubmitting: false,
            hasError: true,
          });
        } else {
          const beers = res.body.entities;
          this.setState({
            beers,
            isSubmitting: false,
            hasError: false,
          });
        }
      });
  },

  renderSearchBox() {
    const { isSubmitting } = this.state;

    if (isSubmitting) {
      return (
        <div className="search-box spin">
          <i className="fa fa-spinner fa-3x pulse"></i>
        </div>
      );
    } else {
      return <SearchBox handleSubmit={this.handleSubmit} />;
    }
  },

  renderError() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className='text-center'><span className="alert label">No Results!</span></div>
      );
    }
  },

  render() {
    const { beers } = this.state;
    return (
      <div>
        <h1 className="text-center">Beer Search App</h1>
        <p className="text-center">Beers in this search: {beers.length}</p>
        {this.renderSearchBox()}
        {this.renderError()}
        <Beers beers={beers} />
      </div>
    );
  },

});
