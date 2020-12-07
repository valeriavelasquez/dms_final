
var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://valeriavelasquez:tomato@cluster0.bmsdw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var app=express()
  
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
app.post('/signUp', function(req,res){ 
    var fname = req.body.fname; 
    var lname =req.body.lname; 
    var email = req.body.email; 
    var age =req.body.age; 
  
    var data = { 
        "fname": fname, 
        "lname":lname, 
        "email": email, 
        "age": age 
    } 
db.collection('toMatch').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('index.html'); 
}) 

app.get('/signUp',function(req,res){ 
    res.render("index");
}).listen(8080) 
  
  
console.log("server listening at port 8080"); 

