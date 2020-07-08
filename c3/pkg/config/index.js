const fs = require('fs');

const configFile = './config.json'
var config = null;

const get = (part) => {
    if(config === null)
        let data = fs.readFileSync(configFile, 'utf8');
        config = JSON.parse(data);
        
};