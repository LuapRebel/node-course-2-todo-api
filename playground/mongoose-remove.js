const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result.result);
// });

// Todo.findOneAndRemove({})
// Todo.findOneAndRemove({_id: '588fa5d3f310ed0380a70a2e'}).then((todo) => {
// 	console.log(todo);
// });

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('588fa5d3f310ed0380a70a2e').then((todo) => {
	console.log(todo);
});