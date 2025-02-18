const mongoose = require('mongoose');

const DrinkSchema = mongoose.Schema(
    {
        name: {
            type: String, required: true
        },
        description: {
            type: String, required: true
        },
        category: {
            type: String, required: true
        },
        size: {
            type: String, enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'], required: true
        },
        temperatureType: {
            type: String, enum: ['Iced', 'Hot', 'Frozen'], required: true
        },
        shots: {
            type: Number, default: 0, required: false
        },
        pumps: {
            type: Number, default: 0, required: false
        },
        isSeasonal: {
            type: Boolean, default: false, required: false
        }
    },
    { timestamps: true }
);

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;