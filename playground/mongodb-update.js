// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('588e287a57acab38e75661b2')
	// }, { $set: {text: 'Eat lunch'}}, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('588e0234de0f662a7ecee65f')
	}, { $set: {name: 'Jen'}, $inc: {"age": 1} }, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	// db.close();
});