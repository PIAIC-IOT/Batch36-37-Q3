const express = require('express');
const app = express();

var objList = [
    [1, 'Fahim', 'NODEJS'],
    [2, 'Ibad', 'NODEJS'],
    [3, 'Salar', 'PHP'],
    [4, 'Waleed', 'RUST']
];

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.get('/students', function (req, res) {
    console.log(objList);

    var responseText = `
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
            </tr>`;

    objList.forEach(element => {
        responseText += `
            <tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
            </tr>`;
    });

    responseText += '</table>';

    res.send(responseText);
})

app.listen(5000, () => {
    console.log("Server is up and running");
})