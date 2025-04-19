const mongoose = require("mongoose");
require('dotenv').config({ path: __dirname + '/.env' });

const MONGO_URL = `mongodb+srv://benjadazajimenez:${process.env.MONGO_PASSWORD}@cluster0.rpti8c6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const db = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("BD Conectada", conn.connection.host);
        
     }catch(error){
        console.log(error)
     }
}

module.exports = db;