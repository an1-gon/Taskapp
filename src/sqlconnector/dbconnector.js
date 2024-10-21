import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TestP@ss123456',
    database: 'task_master',
});

async function dbConnect() {
    try {
        // Create the connection to the database
        console.log("Connected as ID " + connection.threadId);

        // Create tasks table if it doesn't exist
        await connection.query(`CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            task VARCHAR(255) NOT NULL
        )`);
    } catch (err) {
        console.log("Error connecting to Database: " + err.message);
    }
}

async function addTask(taskVal) {
    try {
        // Insert task into the database
        const [results] = await connection.query('INSERT INTO tasks (task) VALUES (?)', [taskVal]);
        connection.end;
        return { id: results.insertId, task: taskVal }; // Return the inserted task
    } catch (err) {
        throw new Error(err.message); // Throw error for handling in the calling context
    }
}

async function dbData(){
  const getData = "SELECT * FROM tasks";
  try{
    const [results, fields] = await connection.query(getData);
    console.log("Success here is your returned data");
    return results;
  }catch(err){
    console.error("There was a problem receiving the data: " + err);
  }
  

}

export { dbConnect, addTask, dbData };
