import React from 'react';

const Beer = React.createClass({

  render() {
    const { beer } = this.props;
    return (
      <div className="small-4 columns beer-wrap">
        <div className="beer">
          <h3>{beer.nameDisplay}</h3>
          <p>{beer.description}</p>
        </div>
      </div>
    );
  },
});

export default React.createClass({
  render() {
    const beers = this.props.beers.map((beer, index) =>
      <Beer key={index} beer={beer} />
    );
    return (
      <div className="row">{beers}</div>
    );
  },
})
