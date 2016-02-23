import { Router } from 'express';
import request from 'request';
import SECRETS from './config/secrets.json';

const TWITTER_USERS_URL = 'https://api.twitter.com/1.1/users/show.json';
const TWITTER_USERS_TIMELINE_URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

export default function(app) {
  const api = Router();

  api.get('/users', (req, res) => {
    const oauth = {
      consumer_key: SECRETS.CONSUMER_KEY,
      consumer_secret: SECRETS.CONSUMER_SECRET_KEY,
      token: SECRETS.ACCESS_KEY,
      token_secret: SECRETS.ACCESS_TOKEN_SECRET,
    };
    const screen_name = req.query.searchVal;

    request.get({
      url: TWITTER_USERS_URL,
      oauth,
      json: true,
      qs: { screen_name },
    }, (error, response, body) => {
      if (response.statusCode === 404) {
        res.send({
          statusCode: 404,
          message: 'User Not Found'
        })
      } else {
        const userInfo = body;
        request.get({
          url: TWITTER_USERS_TIMELINE_URL,
          oauth,
          json: true,
          qs: { screen_name },
        }, (error, response, body) => {
          res.send({
            statusCode: 200,
            entities: {
              userInfo,
              recentTweets: body,
            },
          });
        });
      }
    });
  });
  return api;
}
