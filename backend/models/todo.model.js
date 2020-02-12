const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    todo: { type: String, required: true},
}, {
    isComplete: false
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
