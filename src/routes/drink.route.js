const express = require('express');
const Drink = require('../models/drink.model.js');
const router = express.Router();
const { getDrinks, getDrink, createDrink, updateDrink, deleteDrink } = require('../controllers/drink.controller.js');

router.get('/', getDrinks);

router.get('/:id', getDrink);

router.post('/', createDrink);

router.put('/:id', updateDrink);

router.delete('/:id', deleteDrink);

module.exports = router;