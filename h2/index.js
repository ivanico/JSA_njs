const express = require('express');

const handlers = require('./handlers');

const api = express();

api.get('/students', handlers.getAllStudents);
api.get('/students/:id', handlers.getSignleStudent);
api.post('/students', handlers.createStudent);
api.delete('/students/:id', handlers.removeStudent);
api.put('/students/:id', handlers.updateStudents);
api.patch('/students', handlers.patchStudents);

api.listen(8090, err =>{
    if(err){
        console.error(err);
    }
    console.log('Server started on port 8090')
})