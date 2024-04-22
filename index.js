const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8',(err,data) => {
    if (err) throw (err);
    console.log(data)
});

fs.writeFile(path.join(__dirname, 'files', 'date&time.text'), '12:00AM',(err) => {
    if (err) throw (err);
    console.log('Write complete')
});

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error:${err}`)
    process.exit(1)
});