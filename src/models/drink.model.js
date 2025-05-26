const mongoose = require('mongoose');

const BaseSchema = mongoose.Schema({
    size: {
        type: String,
        enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        required: true,
    },
    temperature: {
        type: String,
        enum: ['Iced', 'Hot'],
        required: true,
    },
    ingredients: {
        shots: {type: Number, default: 0},
        scoops: {type: Number, default: 0},
        pumps: {type: Number, default: 0},
    },
    description: {type: String, required: true},
    instructions: {type: String, required: true},
});

const DrinkSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {
        type: String,
        enum: ['Coffee', 'Tea', 'Juice', 'Frozen', 'Other'],
        required: true,
    },
    isSeasonal: {type: Boolean, default: false},
    variants: [BaseSchema],
}, {timestamps: true});

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;