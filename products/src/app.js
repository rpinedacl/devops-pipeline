import bodyParser from 'body-parser';
import express from 'express'; // const express = require("express");
import { randomBytes } from 'crypto';

const app = express();
app.use(bodyParser.json());

const products = {};

app.get('/products', (req, res) => {
	res.send(products);
});

app.post('/products', (req, res) => {
	const id = randomBytes(4).toString('hex');

	const { name } = req.body;
	products[id] = {
		id,
		name
	};

	res.status(201).send(products[id]);
});

// Esta instruccion expone este archivo como: app
export default app;