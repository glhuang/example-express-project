import { Router } from 'express';
import request from 'request';
import SECRETS from './config/secrets.json';

const BREWERY_DB_URL = 'http://api.brewerydb.com/v2/';

export default function(app) {
  const api = Router();

  api.get('/search', (req, res) => {
    request.get({
      url: `${BREWERY_DB_URL}/search`,
      qs: {
        key: SECRETS.BREWERY_DB_API_KEY,
        type: 'beer',
        q: req.query.searchVal,
      },
    }, (error, response, body) => {
      const parsedRes = JSON.parse(response.body);
      if (parsedRes.data) {
        res.send({
          entities: parsedRes.data
        });
      } else {
        res.status(404).send();
      }
    });
  });
  return api;
}
