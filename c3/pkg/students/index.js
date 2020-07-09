var mongoose = require('mongoose');

const Student = mongoose.model(
    'student',
    {
        fname: String,
        lname: String,
        gpa: Number
    },
    'students'
)

const create = (data) => {
    return new Promise((success , fail) => {
        let s = new Student(data);
        s.save(err =>{
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const getAll= () => {
    return new Promise((success, fail) =>{
        Student.findAll({}, (err, data) =>{
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });    
};

const getOne = () => {
    return new Promise((success, fail) =>{
        Student.findOne({_id: id}, (err,data) => {
            if(err) {
                return fail (err);
            }
            return success(data)
        });
    });
};

const remove = () => {
    return new Promise((success, fail) =>{
        Student.deleteOne({_id: id}, err => {
            if(err) {
                return fail (err);
            }
            return success()
        });
    });
};

const update = () => {
    return new Promise((success, fail) =>{
        Student.updateOne({_id: id}, data, err => {
            if(err) {
                return fail (err);
            }
            return success(data)
        });
    });
};

const patch = () => {
    return new Promise((success, fail) =>{
        Student.updateOne({_id: id}, data, err => {
            if(err) {
                return fail (err);
            }
            return success(data)
        });
    });
};

module.exports = {
    getAll,
    getOne,
    create,
    remove,
    update,
    patch
};