const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var todoID = '588f6623ab2aa02810aba67f';

// if (!ObjectID.isValid(todoID)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: todoID
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: todoID
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(todoID).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userID = '588e97d6decbd646525edfb4';

User.findById(userID).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));