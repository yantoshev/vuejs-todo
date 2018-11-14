const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 25800;

app.use(bodyParser());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is live on port: ${port}`);
});

app.get('/getItems', (req, res) => {
    fs.readFile('db.json', (err, data) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' }); 
        } else {
            res.setHeader('Content-Type', 'application/json');
            const results = JSON.parse(data);
            res.send({ 'type' : 'success', 'data': results });
        }
    });
});

app.post('/setItems', (req, res) => {
    const data = JSON.stringify(req.body);
    console.log(data);
    fs.writeFile('db.json', data, (err) => {
        if (err) {
            res.send({ 'type' : 'error',  'data': 'An error has occurred' }); 
        } else {
            res.send({ 'type' : 'success', 'data' : 'Successfully stored!' });
        }
    });
});