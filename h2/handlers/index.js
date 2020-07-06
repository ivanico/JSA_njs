// JSON handlers

const fs = require('fs');

const appendFile = (filename , data) => {
    return new Promise((success , fail) =>{
        fs.appendFile(filename , data , (err) =>{
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
}

const readFile = (filename) => {
    return new Promise((success , fail) => {
        fs.readFile(filename , 'utf8', (err , data) =>{
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });
}

const unlinkFile = (filename) => {
    return new Promise((success, fail) => {
      fs.unlink(filename, (err) => {
        if (err) {
          return fail(err);
        }
        return success();
      });
    });
  }

  //Services 

  
const getAllStudents = (req, res) => {
    readFile("./students.json")
    .then((data) => {
        return res.status(200).send(data);
    })
    .catch((err) => {
        return res.status(400).send(err);
    });
};

const getSingleStudent = (req, res) => {
    if(students[req.params.id] !== undefined){
        return res.status(200).send(students[req.params.id]);
    }
    return res.status(404).send('Not Found');
};

const createStudent = (req, res) => {
    if(req.body){
        students.push({
            ...req.body,
            id: students[students.length - 1].id + 1
        });
        return res.status(201).send('Created');
    }
    return res.status(400).send('Bad request');
};

const removeStudent = (req, res) => {
    students = students.filter((e, i) => {
        return e.id != parseInt(req.params.id);
    });
    res.status(204).send();
};

const updateStudent = (req, res) => {
    students = students.map((s) => {
        if(s.id === parseInt(req.params.id)) {
            let d = {...req.body, id: parseInt(req.params.id)}
            return  d;
        }
        return s;
    });
    res.status(204).send();
};

const patchStudent = (req, res) => {
    students = students.map((s) => {
        if(s.id === parseInt(req.params.id)) {
            let d = {...s, ...req.body, id: parseInt(req.params.id)}
            return  d;
        }
        return s;
    });
    res.status(204).send();
};

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    removeStudent,
    updateStudent,
    patchStudent,
}; 