var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cfenv = require("cfenv");
var ToDo = require('./ToDo.model');

//var port = 3000;
port = process.env.PORT || 3000;

//var db = 'mongodb://localhost/example'
//mongoose.connect(db);

//get our Org's mLab URL from cfenv
//if it returns null, then connect to local MongoDB
var appEnv = cfenv.getAppEnv();
var mongoLabUrl = appEnv.getServiceURL('clayd-mLab');
if (mongoLabUrl == null) {
  //local or prod development
  mongoose.connect('mongodb://localhost/example');
} else {
  //cloud foundry
  mongoose.connect(mongoLabUrl);
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + "/client")); //Super Important

app.get('/todos', function(req, res) {
  console.log('getting all todos');
  ToDo.find({})
    .exec(function(err, todos) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(todos);
        res.json(todos);
      }
    });
});


app.post('/add-todo', function(req, res) {
  var newToDo = new ToDo();

  newToDo.content = req.body.content;
  //newToDo.author = "Clay";
  //newToDo.date = req.body.date;

  newToDo.save(function(err, todo) {
    if(err) {
      res.send('error saving todo');
    } else {
      console.log(todo);
     res.redirect("/index.html");
    }
  });
});


app.listen(port, function() {
  console.log('app listening on port ' + port);
});