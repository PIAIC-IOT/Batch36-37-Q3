const express = require('express')
const app = express();

app.use(express.json())

var students = [
    { id: 1, name: 'Fahim' },
    { id: 2, name: 'Ibad' },
    { id: 3, name: 'Salar' },
]

app.get('/', (req, res) => {
    res.send(students)
})

app.post('/student', (req, res) => {

    var student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student)

    res.send('record added')
})

app.put('/student/:id', (req, res) => {

    var student = students.find(s => s.id === parseInt(req.params.id))

    student.name = req.body.name

    res.send('record updated')
})


app.delete('/student/:id', (req, res) => {

    var student = students.find(s => s.id === parseInt(req.params.id))

    var index = students.indexOf(student)
    students.splice(index, 1);

    res.send('record deleted')
})
app.listen(5000, () => { console.log('server is up') })