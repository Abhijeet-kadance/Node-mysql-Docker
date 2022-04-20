const express = require('express')

const app = express()
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 3000;
const routerUser = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors(''))

app.use("/", routerUser);


app.listen(port,()=>{
    console.log(`Listining At port ${port}`)
}) 