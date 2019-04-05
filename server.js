const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const books = [
  {
    id: 1,
    title: 'Programming in python',
    pages: 900,
    price: 1000,
    publicationHouse: 'Mehul Learners Pvt Ltd',
    ratings: 4
  },
  {
    id: 2,
    title: 'Programming in scala',
    pages: 250,
    price: 600,
    publicationHouse: 'Martin Ordesky LLP',
    ratings: 5
  },
  {
    id: 3,
    title: 'Programming in javascript',
    pages: 500,
    price: 1500,
    publicationHouse: 'Mehul Learners Pvt Ltd',
    ratings: 4
  }
]

app.use(cors());

app.get('/books', (req, res) => {
  res.send(books.map(book => {
    return {
      id: book.id,
      title: book.title
    };
  }));
});

app.get('/books/:id', (req, res) => {
  setTimeout(() => {
    const bookId = parseInt(req.params['id']);
    const foundBooks = books.filter(book => {
      return book.id === bookId;
    });

    if (foundBooks.length > 0) {
      res.send(foundBooks[0]);
    } else {
      res.status(404).send('Not found');
    }
  }, 5000);
});

app.listen(port, () => console.log(`Lib app listening on port ${port}!`));
