const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pages: Number,
    currentPage: Number
});

module.exports = mongoose.model('Book', bookSchema);
