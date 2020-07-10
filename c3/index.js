const express = require('express');
const bodyParser = require('body-parser');
const config = require('./pkg/config')
const students = require('./handlers/students');
const classes = require('./handlers/classes');
const db = require('./pkg/db');
const config = require('./pkg/config');

db.init();

const api = express();
api.use(bodyParser.json());


api.get('/students', students.getAll);
api.get('/students/:id', students.getSingle);
api.post('/students', students.create);
api.delete('/students/:id', students.remove);
api.put('/students/:id', students.update);
api.patch('/students/:id', students.patch);


api.get('/classes', classes.getAll);
api.get('/classes/:id', classes.ghetSingle);
api.post('/classes', classes.create);
api.delete('/classes/:id', classes.remove);
api.put('/classes/:id', classes.update);
api.patch('/classes/:id', classes.patch);



api.listen(8090, err => {
    if(err) {
        console.error(err);
    }
    console.log('Service started on port', config.get('server').port);
});