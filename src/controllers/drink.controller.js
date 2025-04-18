const Drink = require('../models/drink.model.js');

const getDrinks = async (req, res) => {
    try {
        const drinks = await Drink.find({});
        res.status(200).json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getDrink = async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findById(id);
        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createDrink = async (req, res) => {
    try {
        const drink = await Drink.create(req.body);
        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateDrink = async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findByIdAndUpdate(id, req.body);

        if (!drink) {
            return res.status(404).json({ message: 'Entry not found.' });
        }

        const updatedDrink = await Drink.findById(id);
        res.status(200).json(updatedDrink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteDrink = async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findByIdAndDelete(id);

        if (!drink) {
            return res.status(404).json({ message: 'Entry not found.' });
        }

        res.status(200).json({ message: 'Entry successfully deleted.' })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getDrinks, getDrink, createDrink, updateDrink, deleteDrink };