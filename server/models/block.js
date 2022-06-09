const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports =mongoose.models.block || mongoose.model('block', blockSchema);
