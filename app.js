require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 5000;

const nodemailer = require("./controllers/nodemailer")


// middleware
app.use(express.json());
app.use(cors());

app.all("*",  (req, res)=>{
    let { method } = req
    console.log(method)
   return res.status(200).json({ method })
})
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
