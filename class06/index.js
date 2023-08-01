// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.static(__dirname + '/public'))


// app.get('/',(request,response)=>{
//     response.send('Hello from PIAIC')
// })


// app.get('/query/:name',(request,response)=>{
//     var parameter = request.params.name
//     response.send(`Hello to ${parameter} from PIAIC`);
// })


// app.get('/queryParam/',(request,response)=>{
//     var queryParam = request.query
//     console.log(queryParam)
//     response.send(`queryParam sent`);
// })

// app.post('/',(request,response)=>{
//     var requestData = request.body;
//     console.log(requestData);
//     response.send("Console data showed")
// })


// app.listen(5000,()=>{console.log('Server is up and running')})


// // This is for research purpose
// // import {express} from express;
// // const app = express();