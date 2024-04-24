const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        requied: true,
    },
    color: {
        type: String,
        
    },
    icon: {
        type: String,
        
    }

})
