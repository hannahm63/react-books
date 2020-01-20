const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    categories: {
        type: [String]
    },
    pageCount: {
        type: Number
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    notes: {
        type: String
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

modules.export = Book;