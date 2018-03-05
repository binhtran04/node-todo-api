const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';
console.log('Database URL: ', mongoURL);

mongoose.connect(mongoURL);

module.exports = { mongoose };