const express = require('express');
const db = require('./recipe-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  db.getRecipes()
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json(error);
    });
  });


  router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
  
    db.getShoppingList(id)
    .then(response => {
      if (response.length) {
        res.json(response);
      } else {
        res.status(404).json({ message: 'Could not find ID' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });
  module.exports = router;