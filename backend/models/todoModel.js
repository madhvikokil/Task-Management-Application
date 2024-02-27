const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        // require: true
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    actualHours: {
        type: Number
    },
    budgetedHours: {
        type: Number
    }
});

module.exports = mongoose.model('todos', todosSchema);
