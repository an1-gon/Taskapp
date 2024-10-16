import mysql from 'mysql2/promise';

async function main() {
    try {
        // Create the connection to the database
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'TestP@ss123456',
        });

        console.log("Connected as ID " + connection.threadId);

        // Create a new database
        const createDatabaseQuery = "CREATE DATABASE task_master";
        const [results] = await connection.query(createDatabaseQuery);
        console.log("Database Created:", results);

        // Close connection
        await connection.end();
    } catch (err) {
        console.error("Error:", err.message);
    }
}

// Call the main function
main();
