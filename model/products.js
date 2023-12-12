const mongoose = require("mongoose");
const FormSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    
    manufactureDate:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    productQuality:{
        type:Number,
        required:true,
    }
});

module.exports = mongoose.model("product",FormSchema);