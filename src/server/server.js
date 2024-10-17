import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import dbConnect from '../sqlconnector/dbconnector.js'
import connector from '../sqlconnector/dbconnector.js';
import cors from 'cors';
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Endpoint to add a user
app.post('/users', (req,res) => {
    dbConnect();
    const {task} = req.body;
    connector.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, results) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({id: results.insertID, task})
    });


});

//Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
