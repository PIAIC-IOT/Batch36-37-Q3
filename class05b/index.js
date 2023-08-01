const express = require('express');
const app = express();

var objList = [
    [1,'Fahim','NODEJS'],
    [2,'Ibad','NODEJS'],
    [3,'Salar','PHP'],
    [4,'Waleed','RUST']
];

app.get('/',function name(req,res) {
    res.send("Hello world");
})


app.get('/students',function name(req,res) {
    console.log(objList)

    var responseText = "";
    objList.forEach(element => {
        responseText += `ID: ${element[0]} Name: ${element[1]} Course: ${element[2]} </br>`
    });
    res.send(responseText);
})


app.listen(5000,()=>{console.log("Sever is up and running")})