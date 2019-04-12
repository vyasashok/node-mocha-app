var express = require('express');
var app = express();
var router = express.Router();

app.get('/',function(req,res) {
    res.send("Hello Ashok vyas!");
});

//app.use('/',router);

app.listen(process.env.PORT || 3005, function(){
    console.log("server running");
});