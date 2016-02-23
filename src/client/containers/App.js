import React from 'react';
import SearchBox from '../components/SearchBox';
import UserInfo from '../components/UserInfo';
import Tweets from '../components/Tweets';
import request from 'superagent';

export default React.createClass({
  getInitialState() {
    return {
      userInfo: null,
      isSubmitting: false,
      hasError: false,
      recentTweets: [],
    };
  },

  handleSubmit(searchVal) {
    this.setState({ isSubmitting: true });
    request
      .get('/api/users')
      .query({ searchVal })
      .end((err, res) => {
        const { statusCode, entities, message } = res.body;
        if (statusCode === 200) {
          const { userInfo, recentTweets } = entities;
          this.setState({
            isSubmitting: false,
            hasError: false,
            userInfo,
            recentTweets
          });
        } else {
          this.setState({
            isSubmitting: false,
            hasError: true,
            errors: [message]
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
    const { userInfo, recentTweets } = this.state;
    return (
      <div>
        <h1 className="text-center">Search Twitter User</h1>
        {this.renderSearchBox()}
        {
          userInfo ? <UserInfo userInfo={userInfo} /> : null
        }
        {
          recentTweets.length > 0
          ? <Tweets tweets={recentTweets} />
          : null
        }
        {this.renderError()}
      </div>
    );
  },

});
