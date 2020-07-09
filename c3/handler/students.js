const file = require('../pkg/file');
const students = require('../pkg/students')

const getAll = (req, res) => {
    students.getAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        console.error(err)
    });
};

const getSingle = (req, res) => {
    students.getOne()
    .then(data => {
        res.status.send(data)
    })
    .catch(err =>{
        res.status(500).send(err)
    })   
};

const create = (req, res) => {
    students.create(req.body)
    .then(() =>{
        res.status(201).send('create')
    })
    .catch(err => {
        res.status(500).send(err);
    });
    
};

const remove = (req, res) => {
    students.remove(req.params.id)
    .then(() =>{
       res.status(200).send('Deleted'); 
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('bad req')
    })
};

const update = (req, res) => {
    students.update(req.params.id, req.body)
    .then (() => {
        res.status(200).send('no contend');
    })
    .catch(err => {
        res.status(500).send(err);
    });
};

const patch = (req, res) => {
    students.update(req.params.id, req.body)
    .then (() => {
        res.status(200).send('no contend');
    })
    .catch(err => {
        res.status(500).send(err);
    });
};

module.exports = {
    getAll,
    getSingle,
    create,
    remove,
    update,
    patch
};