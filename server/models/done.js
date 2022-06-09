const mongoose = require('mongoose');

const doneSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('done', doneSchema);
