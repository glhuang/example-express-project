import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      searchValue: ''
    };
  },

  handleSubmit(e) {
    e.preventDefault();

    const { searchValue } = this.state;

    this.props.handleSubmit(searchValue);
  },

  render() {
    return (
      <div className="search-box">
        <h2 className="header">Input your beer</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={(e) => this.setState({searchValue: e.target.value})}
            placeholder="Beer"
          />
          <div>
            <button className="button success">Search</button>
          </div>
        </form>
      </div>
    );
  },
});
