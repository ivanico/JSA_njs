const fs = require('fs');

// // pravi samo zapisuvanje i overwrite mu pravi
// fs.writeFile('test.txt', "hello world", (err) =>{
//     if(err) {
//         return console.error(err)
//     }
//     console.log('Write successfull')
// });

// //dodava ili go kreira i dodava
// fs.appendFile('test.txt', "hello world", (err) =>{
//     if(err) {
//         return console.error(err)
//     }
//     console.log('Write successfull')
// });

// fs.readFile('test.txt', 'utf8', (err , data) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data);
// })

// fs.unlink(path, (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
  
//    console.log("removed")
//   })

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


const readFile = (filename, data) => {
    return new Promise((success, fail) =>{
        fs.readFile(filename, data, 'utf8',(err) =>{
            if(err) {
                return fail(err)
            }
            return success(data)
        });
    });
};


writeFile('test.txt', 'Здраво Свету!')
    .then(() => {
        console.log('Write successfull!');
        return appendFile('test.txt', ' Helloz!');
    })
    .then(() => {
        console.log('Append successfull');
    })
    .catch((err) => {
        console.error(err);
    });