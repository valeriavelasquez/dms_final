const url_ = 'mongodb+srv://valeriavelasquez:tomato@cluster0.bmsdw.mongodb.net/forApp?retryWrites=true&w=majority';
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
quest = require('./questions');
const app = express();

mongoose.connect(url_);
var db = mongoose.connection;
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.post('/signUp',function(req,res){
    // var x = db.collection('toMatch').find().toArray(function(err,A)
    // {
    //     console.log(A);
    // });
    var q1 = parseInt(req.body.q1);
    var q2 = parseInt(req.body.q2);
    var q3 = parseInt(req.body.q3);
    var q4 = parseInt(req.body.q4);
    var q5 = parseInt(req.body.q5);
    var q6 = parseInt(req.body.q6);
    var q7 = parseInt(req.body.q7);
    var q8 = parseInt(req.body.q8);
    var q9 = parseInt(req.body.q9);
    var q10 = parseInt(req.body.q10);
    var q11= parseInt(req.body.q11);
    var q12 = parseInt(req.body.q12);
    var curr = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12];
    var possible_q = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12'];
   // console.log(q1);
    var cursor =  db.collection('toMatch').find().toArray(function(err,A)
    {
        /* Matching START */
        var best_match_score = 0;
        var best_id;
        var best_name;
        if (A.length == 0)
        {
            //Send them to some page that says no matches currently, we have added you to the database
            
        }
        else
        {
            for (var i = 0 ; i < A.length ; i++)
            {
                var curr_score = 0;
                for (var j = 0 ; j < possible_q.length ; j++)
                {
                    curr_score += (curr[j] - A[i][possible_q[j]]) * (curr[j] - A[i][possible_q[j]]);
                }
            

                if (curr_score > best_match_score)
                {
                    best_match_score = curr_score;
                    best_id = A[i]['_id'];
                    best_name = A[i]['fname'];
                }
            }
            console.log("your best match has the name of: " + best_name);
        }
        /* MATCHING END*/

    });
  
    // quest.getMatch(function(err, data)
    // {
    //     if (err)
    //     {
    //         throw err;
    //     }
    //     console.log(data);
    // });
})
app.get('/',function(req,res){ 
    res.sendFile(__dirname + "/index.html");
}).listen(3000) 
console.log('Running on port: 3000');

