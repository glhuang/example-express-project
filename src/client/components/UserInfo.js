import React from 'react';

export default React.createClass({

  render() {
    const { userInfo } = this.props;
    console.log(userInfo)
    return (
      <div className="profile">
        <h3>{userInfo.name}</h3>
        <img src={userInfo.profile_image_url} />
        <div>followers: {userInfo.followers_count}</div>
        <div>friends: {userInfo.friends_count}</div>
        <p>{userInfo.description}</p>
      </div>
    );
  }

});
