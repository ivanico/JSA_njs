const students =[
    {fname:'Pero', lname: 'Peroski' , gpa: 9.2},
    {fname:'Janko', lname: 'Peroski' , gpa: 9.2},
    {fname:'Petko', lname: 'Peroski' , gpa: 9.2}
]

const getAllStudents = (req , res) =>{
    res.status(200).send(students)
};

const getSignleStudent = (req , res) =>{
   if(students[req.params.id] !==undefined){
       return res.status(200).send(sturdent[req.params.id]);
   }
    res.status(404).send('Not Found')
};

const createStudent = (req , res) =>{
    if(req.body){
        students.push(req.body);
        res.send(201).send('Created');
    }
    res.status(400).send('Bad Request')
};

const removeStudent = (req , res) =>{
    const found = students.findIndex((studnet) =>{
        studnet.id === req.params.id
    })
    if (found) {
        students.splice(found, 1)
        res.status(200).json("Succesfully deleted")
    }
    else{
        res.status(400).json('Bad request, no data found!')
    }
};

const updateStudents = (req , res) =>{
    res.status(200).send('ok')
};

const patchStudents = (req , res) =>{
    res.status(200).send('ok')
};

module.exports = {
    getAllStudents,
    getSignleStudent,
    createStudent,
    removeStudent,
    updateStudents,
    patchStudents
}