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
            type: String, enum: ['Coffee', 'Tea', 'Juice', 'Frozen', 'Other'], required: true
        },
        size: {
            type: String, enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'], required: true
        },
        temperature: {
            type: String, enum: ['Cold', 'Hot'], required: true
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