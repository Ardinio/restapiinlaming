const express = require('express');
const weaponsRouter = require('./weapons.router');

// Create the server application 
const app = express();

// Parse incoming JSON 
app.use(express.json());

//Add Resources 
app.use(weaponsRouter);

// 404 handler 
app.use((req, res) => res.status(404).json('Resource not found'));

// Error handler 
app.use((err, req, res, next) => {
    console.trace(err);
    res.status(500).json('Something went wrong...');
});

// Start the server
app.listen(3000);