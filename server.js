//express api line
const express = require('express');
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('.hard.json');
const dataStr = JSON.parse(data);
//express api line
const app = express();

//get request!
app.get('/', function(req, res) {

    res.send("Hello World");
})

app.listen(3000);