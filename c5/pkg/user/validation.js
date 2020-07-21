var validator = require('node-input-validator');

const registerSchema = {
    fist_name:'required|minLength:2',
    last_name:'required|minLength:2',
    email:'required|email',
    password:'required|minLength:2',
    password2:'required|minLength:2'
};

const loginSchema = {
    email: 'required|email',
    password: 'required|minLength:2'
};

const register = (data) => {
    let v = new validator.Validator
    (data,registerSchema);
    return v.check();
};

const login = (data) => {
    let v = new validator.Validator
    (data,loginSchema);
    return v.check();
};

module.exports = {
    register,
    login
}