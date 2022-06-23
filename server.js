//express api line
const express = require('express');
const data = require("./hard.json")
//express api line
const app = express();

function getEmployeeData(index) {
    return data[index]
}

//get request!
app.get('/', function(req, res) {
    res.send(data);
    
});
app.get("/hard/:employeeID", (req, res) => {
    const eData = getEmployeeData(req.params.employeeID);
 if(eData){
    res.send(eData)
 }
 else{
    res.send({"error":"bad user input"});
 }
})

app.listen(3000), () =>{
    console.log("Lets see how this goes...")
};