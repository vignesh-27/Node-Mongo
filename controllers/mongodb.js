var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/mydb');

//Create a schema-this is like a Blue print (like data types)
var todoSchema = new mongoose.Schema({
    item: String
});

//Model Creation
var Todo = mongoose.model('Todo', todoSchema);


var urlencodedParser = bodyParser.urlencoded({extended:false});

//static get, post, delete function from temporary Object data
module.exports = function(app){

app.get('/contact', function(req,res){
    Todo.find({}, function(err, data){    //Retrieve all data from colletion
        if(err) throw err;
        res.render('contact', {todo:data});
    });
});

app.post('/contact', urlencodedParser, function(req,res){
    //Get data from the view and add it to Mongodb
    var newTodo = Todo(req.body).save(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});

app.delete('/contact/:item', function(req,res){
    //Delete the requested item from Mongodb
    Todo.find({item:req.params.item}).remove(function(err, data){
        if(err) throw err;
        res.json(data);
    });
});           

}   