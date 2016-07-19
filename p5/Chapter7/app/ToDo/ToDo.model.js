var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  content: String,
  author: String,
  date: String
});

module.exports = mongoose.model('ToDo', ToDoSchema);