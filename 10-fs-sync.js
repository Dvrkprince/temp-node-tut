//is a JavaScript expression that makes it possible 
//to unpack values from arrays, or properties from objects,
// into distinct variables.
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//same as above
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
// console.log(first,second);

//{flag: 'a'} lets you append to the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');
