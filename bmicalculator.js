const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const bmiRouter = require('./routes/router');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json());
app.use('/calculateBMI', bmiRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, ()=>{
    console.log("App is running on port 3000")
})

