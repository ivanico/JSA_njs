// JSON handlers

const fs = require('fs');


const writeFile = (filename, data) => {
    return new Promise((success, fail) =>{
        fs.writeFile(filename, data, (err) =>{
            if(err) {
                return fail(err)
            }
            return success
        });
    });
};


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
    readFile('students.json')
    .then((data) => {
        return res.status(200).send(JSON.parse(data));
    })
    .catch((err) => {
        return res.status(500).send(err);
    });
};

const getSingleStudent = (req, res) => {
    readFile('students.json')
    .then((data) => {
    if(data[req.params.id] !== undefined){
        return res.status(200).send(JSON.parse(data)[req.params.id]);
    }  
    })
    .catch((err) => {
       return res.status(500).send('Not Found'); 
    });
    
};

const createStudent = (req, res) => {
    readFile('students.json')
    .then((data) => {
    if(req.body){
        var data = JSON.parse(data);
        return writeFile('students.json' ,JSON.stringify({    ...req.body,    
            id: data[data.length - 1].id + 1
        }));
    }})
    .then(() =>{
         return res.status(201).send('Created');
    })    
    .catch((err) => {
        return res.status(400).send(err);
    })   
    }


const removeStudent = (req, res) => {
    readFile('students.json')
    .then((data) =>{
        var dataToRead = JSON.parse(data);
        var dataToRemove = dataToRead.filter((e, i) => {( e.id != parseInt(req.params.id))
        return writeFile('students.json', JSON.stringify(dataToRemove))    
    });    
    })
    .then(() =>{
        return res.status(204).send("deleted")
    })
    .catch((err) =>{
        return res.status(500).send(err)
    })
};

const updateStudent = (req, res) => {
    readFile('students.json')
    .then((data) => {
        var dataToRead = JSON.parse(data);
        var updateData = dataToRead = dataToRead.map((s) => {
        if(s.id === parseInt(req.params.id)) {
            let d = {...req.body, id: parseInt(req.params.id)}
            return  d;
        }
        return s;
    })
    return writeFile('student.json', JSON.stringify(updateData))
    })
    .then(() =>{
        res.status(204).send('Updated');
    })
    .catch(() =>{
        return res.status(500).send(err)
    })
};

const patchStudent = (req, res) => {
    readFile('students.json')
    .then((data) => {
        var dataToRead = JSON.parse(data);
        var patchData = dataToRead = dataToRead.map((s) => {
        if(s.id === parseInt(req.params.id)) {
            let d = {...s, ...req.body, id: parseInt(req.params.id)}
            return  d;
        }
        return s;
    })
    return writeFile('student.json', JSON.stringify(patchData))
    })
    .then(() =>{
        res.status(204).send('Patched');
    })
    .catch(() =>{
        return res.status(500).send(err)
    })
};

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    removeStudent,
    updateStudent,
    patchStudent,
}; 