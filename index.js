const express = require('express');
const mongoose = require('mongoose');

require('./api/profiles/model.js');

const routes = require('./api/profiles/routes.js');
const connection = require('./mongodb.js');

const app = express();


connection().then(() => {
    app.use(express.json());
    app.listen(8080, () => {});

    app.use('/profiles', routes);
    app.use((req, res) => {
        res.status(404).json();
    });
  }).catch(err => {
        console.error(err);
        process.exit(1);
    }
);

