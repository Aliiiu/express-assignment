const express = require('express');

const bookRoute = express.Router();

// READ
bookRoute.get('/', (req, res) => {
	res.status(200).send('Books get route');
});

// CREATE
bookRoute.post('/', (req, res) => {
	const body = req.body;

	res.status(201).send({
		message: 'Book added Successfully',
		data: body,
	});
});

//UPDATE
bookRoute.put('/:id', (req, res) => {
	const id = req.params.id;

	res.status(200).send({
		message: `Book with ${id} has been updated`,
	});
});

//DELETE
bookRoute.delete('/:id', (req, res) => {
	const id = req.params.id;

	res.status(200).send({
		message: `Book with ${id} has been deleted`,
	});
});

module.exports = bookRoute;
