import { Router } from 'express';

export defaul function(app) {
  const api = Router();

  api.get('/search', (req, res) => {
    res.send({
      success: true
    });
  })
  return api;
}
