const express = require('express');
const config = require('config');
const mongoose = require('mongoose');  
// import  Router  from "express";
const app = express();

app.use('/api/auth', require('./routes/auth_routes.js'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
           
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
} 

start()
