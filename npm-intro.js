//npm-global command, comes with node
// npm --version


// local dependency - use it only in this particular project
// npm i <packageName> eg npm i bootstrap

// global dependency- use it in any project 
// npm install -g packageName>
// sudo npm install -g <packageName> (mac)


// package.json manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//if you want to publish it the package must have a unique name


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World");
//dont share node module folders
//the package json will hold the dependencies needed to be installed

//https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies

//to unistall package
//npm uninstall packageName
//npm start

