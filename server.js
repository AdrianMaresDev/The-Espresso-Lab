require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Drink = require('./models/drink.model.js');
const drinkRoute = require('./routes/drink.route.js');
const app = express();
const PORT = 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/drinks', drinkRoute);

app.get('/', (req, res) => {
    res.send('Test');
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