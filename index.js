const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./conn/MongoDB/database');
const config = require("./config.js");

require('dotenv').config()

const PORT = config.server.port ?? 9123;
const app =  express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.start();

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Servidor conectado'
    });
});

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});