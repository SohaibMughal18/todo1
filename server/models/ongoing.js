const mongoose = require('mongoose');

const ongoSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('ongo', ongoSchema);
