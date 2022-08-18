// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//Consider modules to be the same as JavaScript libraries.

//require pulls where the data is located for that module
//include modules that exist in separate files
const names = require('./04-names');
const sayHi = require('./05-utils');

const data = require('./06-alternative-flavor');
require('./07-mind-grenade'); //interesting

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
