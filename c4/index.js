const express = require('express');
const config = require('./pkg/config');
const bodyParser = require('body-parser');
const products = require('./handler/products');
const db = require('./pkg/db');

db.init();

const api = express();
api.use(bodyParser.json());

api.get('/product', products.getAll);
api.get('/product/:id', products.getSingle);
api.post('/product', products.create);
api.delete('/product/:id', products.remove);
api.put('/product/:id', products.update);
api.patch('/product/:id', products.patch);


api.listen(8090, err => {
    if(err) {
        console.error(err);
    }
    console.log('Service started on port', config.get('server').port);
});