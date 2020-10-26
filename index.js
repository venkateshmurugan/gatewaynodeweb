const express = require('express');

var app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Server is up');
});

app.post('/getBalance', function(request, response){
    response.header('Content-Type', 'application/json');
    response.send(JSON.stringify({"speech": "Your Balance is $100",
                                  "displayText":"Your Balance is $100"}))
});

app.post('/activate', function(request response){
    response.header('Content-Type', 'application/json');
    response.send(JSON.stringify({"speech": "Your card is successfully activated.",
                                  "displayText":"Your card is successfully activated."}))
});
app.listen(PORT, function(){
    console.log(`Server is listening at port ${ PORT } ....`)
});
