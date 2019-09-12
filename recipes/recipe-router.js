const express = require('express');
const db = require('../data/db-config');
const router = express.Router();

router.get('/', (req, res) => {
    db('recipes')
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json(error);
  });
  });

  module.exports = router;