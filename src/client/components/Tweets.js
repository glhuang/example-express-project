import React from 'react';

const Tweet = React.createClass({

  render() {
    const { tweet } = this.props;
    const { text, created_at } = tweet;
    return (
      <div className="small-4 columns tweet-wrap">
        <div className="tweet">
          <h5>{created_at}</h5>
          <p>{text}</p>
        </div>
      </div>
    );
  },
});

export default React.createClass({
  render() {
    const tweets = this.props.tweets.map((tweet, index) =>
      <Tweet key={index} tweet={tweet} />
    );
    return (
      <div className="row">{tweets}</div>
    );
  },
})
