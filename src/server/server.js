import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import {dbConnect, addTask, dbData} from '../sqlconnector/dbconnector.js'

import cors from 'cors';
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Home Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Endpoint for fetching Data
app.get('/data', async(req, res) => {

  const taskData = await dbData(); //Fetch Backend Data
  return res.status(200).json(taskData);
})

//Endpoint to add a user
app.post('/users', (req,res) => {
 
    (async () => {
        await dbConnect(); // Ensure the database connection is established
    
        try {
            const {tasks} = req.body
            console.log(tasks);
            const task = await addTask(tasks);
            console.log('Task added:', task);
            res.status(200).json({messsage: "Request successful"});
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    })();
});

//Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

