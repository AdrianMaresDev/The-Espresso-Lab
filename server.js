require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Drink = require('./models/drink.model.js');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Test');
});

app.get('/api/drinks', async (req, res) => {
    try {
        const drinks = await Drink.find({});
        res.status(200).json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/drink/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findById(id);
        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/drinks', async (req, res) => {
    try {
        const drink = await Drink.create(req.body);
        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/api/drink/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findByIdAndUpdate(id, req.body);

        if (!drink) {
            return res.status(404).json({ message: "Entry not found." });
        }

        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the database.');
    } catch (err) {
        console.log('Not connected to the database.', err);
    }
}

connectToDB().then(() => {
    app.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));
});