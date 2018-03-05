const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Toto.findOneAndRemove({_id: '5a9a6744c5b862704ba2798c'}).then(() => {

});

// Todo.findByIdAndRemove('5a9a6744c5b862704ba2798c').then((todo) => {
// 	console.log(todo);
// });