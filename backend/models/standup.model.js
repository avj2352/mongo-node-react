var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Mongoose will create an _id by default
//The Schema Type of _id is ObjectType
//To disable mongoose's _id set it to false
var standupSchema = new Schema({
    name:String,
    project:String,
    workYesterday:String,
    workToday:String,
    impediment:String,
    createdOn:{type:Date,default:Date.now}
});

module.exports = standupSchema;

//Creating one more model
var noIdSchema = new Schema({
    name:String,
    _id:false
});

//Same as export default in ES6
module.exports = mongoose.model('Standup',standupSchema);
