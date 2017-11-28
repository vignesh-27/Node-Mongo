var bodyParser = require('body-parser');
var Todo = require('../model/todo.js');
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

app.get('/contact', function(req,res){
    Todo.find({}, function(err, data){    //Retrieve all data from colletion
        if(err) throw err;
        res.render('contact', {todo:data});
    });
});

app.post('/contact', urlencodedParser, function(req,res){
    //Get data from the view and add it to Mongodb
    var todo = {item:req.body.item, description:req.body.description, price:req.body.price};
    var newTodo = Todo(todo).save(function(err,data){
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