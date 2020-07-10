var mongoose = require('mongoose');

const Class = mongoose.model(
    'class',
    {
        class: String,
        teacher: String,
        numberOfStudents: Number,
        regularStudent: Number,
        associateStudent: Number
    },
    'classes'
)

const create = (data) => {
    return new Promise((success , fail) => {
        let c = new Calss(data);
        c.save(err =>{
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const getAll = () => {
    return new Promise((success , fail) => {
        Class.findAll({}, (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const getOne = () => {
    return new Promise((success , fail) => {
        Class.findOne({_id:id}, (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const remove = () => {
    return new Promise((success , fail) => {
        Class.deleteOne({_id:id}, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const update = () => {
    return new Promise((success, fail) => {
        Class.updateOne({_id:id}, (data,err) => {
            if(err) {
                return fail (err);
            }
            return success(data);
        });
    });
};

module.exports = {
    create,
    getAll,
    getOne,
    remove,
    update
};