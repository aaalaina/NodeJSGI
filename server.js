//express api line
const express = require('express');
const data = require("./hard.json")
//express api line
const app = express();

//get request!
app.get('/', function(req, res) {

    res.send("Hello World");
})

app.listen(3000);