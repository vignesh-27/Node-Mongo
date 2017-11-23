var bodyParser = require('body-parser');

var data = [{item:'Apple'}, {item:'Lenove'}, {item:'Motorolla'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});

//static get, post, delete function from temporary Object data
module.exports = function(app){

app.get('/contact', function(req,res){
    res.render('contact', {todo:data});
});

app.post('/contact', urlencodedParser, function(req,res){
    data.push(req.body);   
    res.json(data);
});

app.delete('/contact/:item', function(req,res){
    data = data.filter(function(todo){
       return  todo.item !== req.params.item.trim();
    });           
    res.json(data);
});

}   