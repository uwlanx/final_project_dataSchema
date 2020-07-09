const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    address:{
        street: {
            type: String,
            required: true
        },
        postcode:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
    },

    contact:{
        home:{
            type: Number,
        },
        GSM: {
            type: Number,
            required: true
        }
    },

    report:{
        type:['yes', 'no'],
        require:true,
    }
});

module.exports=mongoose.model('report', reportSchema)