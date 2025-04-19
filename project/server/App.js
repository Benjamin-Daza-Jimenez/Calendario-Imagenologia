require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require('./Database');

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

db();

app.listen(app.get("port"), () =>{
    console.log('Servidor está corriendo en el puerto:', app.get("port"));
});

//Routes
app.use('/usuario', require('./Routes/users'))
app.use('/calendario', require('./Routes/horas'))
app.use('/auth', require('./Routes/auth'));

module.exports = app;