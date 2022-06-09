const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports = mongoose.models.todo|| mongoose.model('todo', todoSchema);
