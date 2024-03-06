const express = require('express');
require('dotenv').config();

const bookRoute = require('./routes/book.route');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/books', bookRoute);

app.get('/', (req, res) => {
	res.status(200).send('Welcome to Express Assignment');
});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
