const mysql2 = require('mysql')
const dotenv = require("dotenv")
dotenv.config()

const con = mysql2.createConnection({
    host:"localhost",
    user: process.env.DB_USER || "root",
    password:process.env.DB_PASSWORD || "pass123",
    database: process.env.DB_NAME || "Test_db",
    port:3307
})

module.exports = con