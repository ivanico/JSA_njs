const { Schema } = require("mongoose");
const validator = require('node-input-validator');

const schema = {
    class: required,
    teacher: required,
    numberOfStudents: required,
    regularStudent: required,
    associateStudent: required
};
