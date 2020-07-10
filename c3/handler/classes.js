const classes = require('../pkg/classes');

const getAll = (req, res) => {
    classes.getAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const getSingle = (req, res) => {
    classes.getOne()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const create = (req, res) => {
    classes.create(req.body)
    .then(() =>{
        res.status(200).send('ok');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const remove = (req, res) => {
    classes.remove(req.params.id)
    .then(() => {
        res.status(204).send("no content");
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    })
};

const update = (req, res) => {
    classes.update(req.params.id, req.body)
    .then(() => {
        res.status(200).send('no content');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const patch = (req, res) => {
    classes.update(req.params.id, req.body)
    .then(() => {
        res.status(200).send('no content');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
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