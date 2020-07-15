const validator = require('node-input-validator');

const schema = {
    name: 'required|minLength:2|maxLength:30',
    price: 'required|integer',
    category: 'required|minLength:2|maxLength:30',
    manufacturer: 'required|minLength:2|maxLength:30',
    country_of_origin: 'required|minLength:2|maxLength:25'
};

const validate = (data) => {
    let v = new validator.Validator(data, schema);
    return v.check();
}

module.exports = {
    validate
}