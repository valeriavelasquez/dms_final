var mongoose = require('mongoose');

//signature

var questionsSchema = mongoose.Schema(
    {
        fname:{
            type : String,
            required: true
        },
        lname:{
            type : String,
            required: true
        },
        email:{
            type : String,
            required: true
        },
        age:{
            type : String,
            required: true
        },
        q1: {
            type : String,
            required : true
        },
        q2: {
            type : String,
            required : true
        },
        q3: {
            type : String,
            required : true
        },
        q4: {
            type : String,
            required : true
        },
        q5: {
            type : String,
            required : true
        },
        q6: {
            type : String,
            required : true
        },
        q7: {
            type : String,
            required : true
        },
        q8: {
            type : String,
            required : true
        },
        q9: {
            type : String,
            required : true
        },
        q10: {
            type : String,
            required : true
        },
        q11: {
            type : String,
            required : true
        },
        q12: {
            type : String,
            required : true
        }
    }
);

var quest = module.exports = mongoose.model('toMatch', questionsSchema);

module.exports.getMatch = function(callback,limit)
{
        quest.find(callback).limit(limit);
 
}