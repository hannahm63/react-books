const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB"
);

const bookSeed = {
    title: "The Song Of The Dodo",
    subtitle: "Island Biogeography in an Age of Extinctions",
    authors: ["David Quammen"],
    description: "Why have island ecosystems always suffered such high rates of extinction? In our age, with all the world's landscapes, from Tasmania to the Amazon to Yellowstone, now being carved into island-like fragments by human activity, the implications of this question are more urgent than ever. Over the past eight years, David Quammen has followed the threads of island biogeography on a globe-encircling journey of discovery.",
    categories: ["Nature"],
    pageCount: 704,
    image: "http://books.google.com/books/content?id=53kuEeItYtIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books?id=53kuEeItYtIC&dq=song+of+the+dodo&hl=&source=gbs_api",
    notes: "this book is great!",
    date: new Date(Date.now())
};

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(`${data.result.n} records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });