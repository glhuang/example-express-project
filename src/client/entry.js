require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const SearchBox = React.createClass({
  render() {
    return (
      <div className="search-box">
        <h1>Input your beer</h1>
        <input
          placeholder="Beer"
        />
      </div>
    );
  },
});

ReactDOM.render(
  <SearchBox />,
  document.getElementById('app')
);
