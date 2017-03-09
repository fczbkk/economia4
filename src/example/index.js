var user_lib = require('./user');

var me = user_lib.createUser('Riki');

console.log(me.getName());