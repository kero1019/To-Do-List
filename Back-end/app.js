const express = require("express")
const CORS = require('cors');
const mongoose = require('mongoose');
const router = require('./Routes/routes')

const dbURL = "mongodb://localhost:27017/toDoList"
const Port = 5000;
const app = express();

// Middlewares 
app.use(CORS());
app.use(express.json())
app.use('/api/lists', router)

mongoose.connect(dbURL).then(()=>{
    console.log("connected to DataBase");
    app.listen(Port, ()=>{
        console.log("listen on port 5000");
    })
}).catch((error)=>{console.log("error message", error.message)});


