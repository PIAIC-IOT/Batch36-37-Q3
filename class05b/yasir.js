const express = require("express");
const app = express();

var objlist = [
  [1, "Yasir", "Node.js"],
  [2, "Nasir", "HTML"],
  [3, "Tahir", "JAVA"],
];

app.get("/", function name(req, res) {
  res.send("Hello world");
});

app.get("/students", function name(req, res) {
  console.log(objlist);

  var restext = `
    <html>
     <h1>Student Table</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>`;

  objlist.forEach((element) => {
    restext += `
          <tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
          </tr>`;
  });

  restext += `
        </table>
      </body>
    </html>`;

  res.send(restext);
});

app.listen(5000, () => {
  console.log("Sever is up and running");
});