var mongoose = require('mongoose');

//Create a schema-this is like a Blue print (like data types)
var todoSchema = new mongoose.Schema({
    item: String,
    description: String,
    price: Number
});

//Model Creation
module.exports = mongoose.model('Todo', todoSchema);

