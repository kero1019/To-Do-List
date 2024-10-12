const mongoose = require('mongoose')
const ListSchema = new mongoose.Schema({
    title:String, 
    body:String, 
    number:Number
} , {timestamps: true});

const List = mongoose.model("List", ListSchema)
module.exports= List