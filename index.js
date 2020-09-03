const express = require('express');

var app = express()

app.get('/', function(req, res) {
    res.send('Server is up');
});

app.post('/getBalance', function(request, response){
    response.header('Content-Type', 'application/json');
    response.send(JSON.stringify({"speech": "Your Balance is $100",
                                  "displayText":"Your Balance is $100"}))
});

app.listen(8000, function(){
    console.log("Server is listening at port 8000....")
});
